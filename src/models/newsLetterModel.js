import mongoose from "mongoose";

const newsLetterSchema = new  mongoose.Schema({

    email : {
        type : String
    }
} , {
    timestamps : true
})

const newsLetterModel = mongoose.model("newsLetter_Collection" , newsLetterSchema)

export default newsLetterModel