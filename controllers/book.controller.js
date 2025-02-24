import Book from "../models/book.model.js";


export const addBook=async(req,res)=>{
    const {title,author,ISBN}=req.body;
    const book=await Book.create({title,author,ISBN});
    res.status(201).json({message:"book added successfully",book});
}

export const getBook=async(req,res)=>{
    const books=await Book.find();
    res.status(200).json(books);
}

export const getBookByISBN=async(req,res)=>{
    const {ISBN}=req.body;
    const book=await Book.findOne({ISBN});
    res.status(200).json(book);
}

export const getBookByTitle=async(req,res)=>{
    const {title}=req.body;
    const book=await Book.findOne({title});
    res.status(200).json(book);
}

export const getBookByAuthor=async(req,res)=>{
    const {author}=req.body;    
    const book=await Book.findOne({author});
    res.status(200).json(book);
}