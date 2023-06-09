import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	img: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	}
},
{
	timestamp: true
}
)

const Post = mongoose.model('post', postSchema);

export default Post;