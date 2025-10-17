const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [
    {
        from:"anshi",
        to:"anannya",
        msg:"hello! How are You ?",
        created_at: new Date(),
    },
    {
        from:"pawan",
        to:"Gaurav",
        msg:"teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from:"aman",
        to:"aryan",
        msg:"All the best!",
        created_at: new Date(),
    },
    {
        from:"Swati",
        to:"Subhi",
        msg:"bring me some fruits",
        created_at: new Date(),
    },
    {
        from:"ayshi",
        to:"tanu",
        msg:"send me notes",
        created_at: new Date(),
    },
    {
        from:"arav",
        to:"anya",
        msg:"Hey!",
        created_at: new Date(),
    },
]
Chat.insertMany(allChats);