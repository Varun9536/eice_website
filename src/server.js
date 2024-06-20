import database_connection from "./Database/db_connection.js";
import { app } from "./middleware/apiMiddleware.js";




// database connection
database_connection()
    .then(() => {
        console.log("database connection function run successfuly")
    }).catch((error) => {
        console.log("connection fails due to :", error)
    })




// server connection
app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running on port ${process.env.PORT} `)
})