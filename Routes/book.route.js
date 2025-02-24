import express from "express";
import {addBook, getBook, getBookByAuthor, getBookByTitle, getBookByISBN } from "../controllers/book.controller.js";
const router = express.Router();

router.post("/addbook", addBook);

router.get("/getbook", getBook);

router.get("/getbook/byisbn", getBookByISBN);
router.get("/getbook/bytitle", getBookByTitle);
router.get("/getbook/byauthor", getBookByAuthor);

export default router;