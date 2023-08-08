// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const colors = require("colors");
// mongoose.set("strictQuery", false);

// // personal-portfolio
// // olFbXnq2gpZHxaRC

// const dbConnect = async () => {
//     try {
//         mongoose.connect( {
//             dbName: "Personal-Portfolio",
//         });
//         console.log(`db connected successfully`.white.bgGreen.bold);
//     } catch (error) {
//         console.log('err.message');
//     }
// };

// module.exports = dbConnect;
const mongoose = require("mongoose");
require("colors");
require("dotenv").config();


mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

// mongodb+srv://Ameliasoft:Ameliasoft1234@ameliasoft.2bsr6uz.mongodb.net/?retryWrites=true&w=majority

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.w0pu2sb.mongodb.net/?retryWrites=true&w=majority`;



const db = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database Connected".yellow.bold);
    } catch (err) {
        console.log(err);
    }
};

module.exports = db;