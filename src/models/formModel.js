import mongoose from "mongoose";

const formSchema = new mongoose.Schema({

    user_name : {
        type : String 
        
    }  ,

    email : {
        type : String

    } ,

    contact_no : {

        type : String || Number

    } , 

    message : {

        type : String

    }



} , {
    timestamps : true
})

const formModel = mongoose.model("form_collection" , formSchema)
export default formModel