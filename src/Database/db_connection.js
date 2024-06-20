import mongoose from "mongoose";

const database_connection = async()=>
    {
        try {
            let datbase_response = await mongoose.connect(`${process.env.MONGO_CONNECTION_URI}`)
            console.log(datbase_response.connection.host)
        } catch (error) {
            console.log("error" , error)
        }
    }

    export default database_connection;