import  Review from "../models/review.model.js";

export const putReview=async(req,res)=>{
    const {BookISBN}=req.params;
    const {review}=req.body;

    
    const findreview=await Review.findOne({BookISBN,RevievedBy:req.user});
    if(findreview){
        findreview.review=review;
        await findreview.save();
        return res.status(200).json({message:"review updated successfully"});
    }
    const review1=await Review.create({review,RevievedBy:req.user,BookISBN});
    res.status(201).json({message:"review added successfully"});
}

export const getReview=async(req,res)=>{
    const {BookISBN}=req.params;
    
    const reviews=await Review.find({BookISBN});
    if(!reviews.length)
        res.status(200).json({message:"NO review Added for book"}); 
    else
    res.status(200).json(reviews);
}

export const deleteReview=async(req,res)=>{
    const {BookISBN}=req.params;
    
    const gotone=await Review.deleteOne({RevievedBy:req.user,BookISBN,});
    if(!gotone.length)
        res.status(200).json({message:"NO review to delete for user"}); 
    else
    res.status(200).json({message:"review deleted successfully"});
}

