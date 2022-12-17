import mongoose from "mongoose";

const DBConnection = async () => {
  const URL = `mongodb+srv://sachin:sachin@cluster0.wstglyr.mongodb.net/?retryWrites=true&w=majority`;
  //URL from online mongodb
  try {
    await mongoose.connect(`${URL}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log("Error while connecting to DB", err);
  }
};

export default DBConnection;
