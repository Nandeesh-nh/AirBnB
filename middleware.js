const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js")
const {Schema,reviewSchema} = require("./schema.js")
const ExpressError = require("./utils/ExpressError.js")
const funvalidation = (req,res,next)=>{
    let {error} = Schema.validate({...req.body,});
    console.log("hi you are near funvalidation")
    if(error) {
       return next(new ExpressError(error,400))
    } 
    next();
}
const reviewValidation = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    console.log("you are near review validation")
    if(error) {
        const errMsg = error.details.map(err => err.message).join(',');
        return next(new ExpressError(error,400))
    } else {
        next();
    }
    
}
const isloggedin = function (req,res,next){
    console.log("your are i islogged in")
    if(!req.isAuthenticated()) {
        req.session.redirectUrl =req.originalUrl;
        req.flash("error","You mush Login to use this feature");
        res.redirect("/login")
    }
    else {
         return next();
    }
   
}

const savelocation = function (req,res,next){
    console.log("you are near save location")
    res.locals.redirectUrl = req.session.redirectUrl;
    next();
}

const isOwner =  async function (req,res,next) {
    console.log("you are in the isowner")
    let {id} = req.params;
    let curUser = await Listing.findById(id);
    if(!curUser.owner.equals(res.locals.user._id)) {
        req.flash("error","Only owner of this listing can access this feature");
       return res.redirect(`/listings/${id}`)   
    }
    next();
}

const isReviewAuthor = async function(req,res,next) {
    let {id,reviewId}= req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.user._id)) {
        req.flash("error","Only owner of this listing can access this delete feature");
        return res.redirect(`/listings/${id}`)  
    }
    next();
}

module.exports = {isloggedin,savelocation,isOwner,funvalidation,reviewValidation,isReviewAuthor};