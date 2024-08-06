const Listing = require("../models/listing");
const axios = require("axios");
const ExpressError = require("../utils/ExpressError");

async function forwardGeocode(address) {
    console.log("you are in teh forward geocoding")
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(
    address
  )}.json?key=${process.env.map_api_Key}`;
    const response = await axios.get(url); 
    return response.data.features[0].geometry;    
}


module.exports.indexRoute = async (req,res,next)=>{
    let category = req.query;
    let count = 0;
    if(JSON.stringify(category)!=='{}') {
        let value = await Listing.find({category : `${category.q}`});
       
        if(value.length==0) {
            return next(new ExpressError("Listing is not added for this category",500)); 
        }
        else {
            console.log(value);
            return  res.render("listings/index",{value});
        }
    }
    console.log("i am here in index route" + count++);
    let value = await Listing.find().sort({price : 'asc'});
    if(!value) {
        return next(new ExpressError("server is not responding",500));
    }
    console.log("near render part of the index");
    res.render("listings/index",{value});
}

module.exports.search = async(req,res,next)=>{
    let search = req.body;
    let value = await Listing.find({category:search.search});
    if(value.length==0) {
        req.flash("success","listing is not added for this category")
        return res.redirect("/listings");
    }
    return res.render("listings/index", {value});
}

module.exports.newRoute = async (req,res)=>{
    res.render("listings/new");
}

module.exports.postNewRoute = async (req,res,next)=>{
    let {title,description,image,price,location,country,category} = req.body;
    console.log("near post request");
    console.log(req.body);
    // in an async function, or as a 'thenable':
   if(!req.file) {
     return next(new ExpressError("image not found",500));
   }
    let url = req.file.path;
    let filename = req.file.filename;
let demo = new Listing({title,description,image,price,location,country,category});
demo.owner = req.user._id;
demo.image = {url,filename};
demo.geometry = await forwardGeocode(location + " " + country);
console.log(demo);
await demo.save();
req.flash("success","New Listing is added")
console.log("redirecting from adding to listings");
res.redirect("/listings");
}

module.exports.showRoute = async (req,res,next)=>{
    let {id} = req.params;
    const val = await Listing.findById(id).populate({path: "reviews",populate : {path : "author"},}).populate("owner");
    if(!val) {
       req.flash("error","Listing you requested for does not exist")
       return res.redirect("/listings");
   }
   else {
        res.render("listings/show",{val});   
   }  
}

module.exports.editRoute = async (req,res,next)=>{
    let {id} = req.params;
    const val = await Listing.findById(id);
    const originalUrl = val.image.url;
    let reducedImage = originalUrl.replace("/upload","/upload/w_300,q_auto");
    if(!val) {
        req.flash("error","Listing you requested for does not exist")
        return res.redirect("/listings");
    }
    else {
         res.render("listings/edit",{val,reducedImage});
    }  
}
module.exports.putEditRoute = async (req,res)=>{   
    let {id} = req.params;
    let check = await Listing.findById(id);
    let listings = await Listing.findByIdAndUpdate(id,{...req.body},{new: true,runValidators : true});  
    if(typeof req.file !="undefined") {
        await cloudinary.uploader.destroy(listings.image.filename);
        let url = req.file.path;
        let filename = req.file.filename;
        listings.image = {
            url,filename
        }     
   }
   if (check.location!=listings.location || check.country!=listings.country ) {
    const geometry = await forwardGeocode(listings.location + " " +listings.country);
    listings.geometry = geometry; // Update geometry
   }   
    await listings.save();        
    req.flash("success","Listing is updated");
    return res.redirect(`/listings/${id}`);
}
module.exports.deleteRoute = async (req,res,next)=>{
    let {id} = req.params;
    let val = await Listing.findByIdAndDelete(id)
    console.log(val);
    console.log("i am in the delete route")
    if(!val){
        return next(new ExpressError("not found id",404))
    }
    req.flash("success","Deleted listing successfully")
    console.log(val);
    console.log("moving from the delete to lisings");
    res.redirect("/listings");
}


