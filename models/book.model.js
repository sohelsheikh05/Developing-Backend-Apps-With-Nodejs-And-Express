import mongoose from "mongoose";

const Bookschema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    ISBN:{
        type: String,
        required: true
    }
    });

export default mongoose.model("Book", Bookschema);