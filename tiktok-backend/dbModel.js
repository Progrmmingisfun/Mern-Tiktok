import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    discription:String,
    shares:String,
});


//Collection inside the database
export default mongoose.model('tiktokVideos',tiktokSchema);