import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import connect from "./db.js"
import router from "./router/router.js"

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: false}));
dotenv.config();

server.use('/posts', router);

server.listen(process.env.SERVER, () => {
	connect();
	console.log(`https://localhost:${process.env.SERVER}/posts`)
})