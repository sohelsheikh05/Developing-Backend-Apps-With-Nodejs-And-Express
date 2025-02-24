import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true
    },
    RevievedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema2",
        required: true
    },
    BookISBN: {
        type:"String",  
        required: true
    }
});

export default mongoose.model("Review", reviewSchema);