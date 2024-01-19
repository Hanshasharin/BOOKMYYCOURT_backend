 const mongoose = require('mongoose');
 const connectDB = async () => {
     try {
    //    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/bookmycourt`, {
    //      useNewUrlParser: true ,
    //  });

     const conn = await mongoose.connect(`mongodb+srv://sharinhansha:UtZerdbWbpd9A3p4@cluster0.1dyucts.mongodb.net/bookmycourt`)
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.log('error')
     console.error(error.message);
     process.exit(1);
   }
  }
   module.exports = connectDB 