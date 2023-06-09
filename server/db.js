import mongoose from "mongoose";

const connect = () => {
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
	mongoose.connect(process.env.DB_URI, options)
	.then(() => {
		console.log('connected db');
	}).catch((error) => {
		console.log(error.message);
	})
}

export default connect;