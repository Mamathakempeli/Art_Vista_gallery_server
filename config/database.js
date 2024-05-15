const mongoose = require("mongoose");

const connectDatabase = () => {
  // mongoose.connect(process.env.DB_URI, {
    mongoose.connect('mongodb+srv://mamathakempeli:mamatha@cluster0.zzgmfiy.mongodb.net/artGalleryBE'
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
