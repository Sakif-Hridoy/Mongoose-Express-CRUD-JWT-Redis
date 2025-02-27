const express = require("express");
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const { default: mongoose } = require("mongoose");
const Todo = new mongoose.model("Todo",todoSchema)


router.get("/",async(req,res)=>{})

router.get("/:id",async(req,res)=>{})

router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();  // ✅ No callback, just await the operation
        res.status(200).json({ message: "Todo was inserted successfully!" });
    } catch (err) {
        res.status(500).json({ error: "There was a server error" });
    }
});


router.post("/all",async(req,res)=>{})

router.put("/:id",async(req,res)=>{})

router.delete("/:id",async(req,res)=>{})

module.exports = router;
