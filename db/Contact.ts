import mongoose from "npm:mongoose";
import { Post } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Post>({
  Name: {type: String, required:true},
  Email: {type: String, required:true},
  Age: {type: Number, required:true},
});

export default mongoose.model<Post>("Post", schema);
