import BookModel from "../Model/bookSchema.js"
import bookRouter from "../Routes/bookRouter.js";

const AddBook = async (req, res) => {
    try {
        const data = new BookModel(req.body);
        await data.save();
        res.status(201).json({ data, message: "Book Added Successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getBook = async(req, res)=>{
    try {
        const data = await BookModel.find()
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const editBook = async(req, res)=>{
    try {
        const data = await  BookModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const dltBook = async(req, res)=>{
    try {
        const data = await BookModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message:"Book Deleted Syccessfully"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { AddBook, dltBook,getBook,editBook }