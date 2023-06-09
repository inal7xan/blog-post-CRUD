import express from "express";
import Post from "../models/model.js"

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const allPosts = await Post.find();
		res.json(allPosts)
	} catch(error) {
		console.log(error.message);
	}
})
router.get('/:id', async (req, res) => {
	const allPosts = await Post.create(req.body);
	res.status(200).json(allPosts);
})
router.post('/', async (req, res) => {
	try {
	    const allPosts = await Post.create(req.body);
     	res.status(200).json(allPosts);
	}catch(error) {
		console.log(error.message)
		res.status(500).json({msg: error.message})
	}
})
router.put('/:id', async (req, res) => {
	try {
	    const { id } = req.params;
	    const allPosts = await Post.findByIdAndUpdate(id, req.body);
	    res.status(200).json(allPosts);
	    if(!allPosts) {
		  return res.status(404).json({msg: `cannot find any product with ID ${id}`});
	    }
	}catch(error) {
		res.status(500).json({msg: error.msg})
	}
})
router.delete('/:id', async (req, res) => {
	try {
	    const { id } = req.params;
	    const allPosts = await Post.findByIdAndDelete(id, req.body);
	    res.status(200).json(allPosts);
	    if(!allPosts) {
		  return res.status(404).json({msg: `cannot find any product with ID ${id}`});
	    }
	}catch(error) {
		res.status(500).json({msg: error.msg})
	}
})

export default router;