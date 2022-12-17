import User from "../schema/user-schema.js";

export const addUser = async (req, res) => {
  const user = req.body;

  const validatedUser = new User(user);

  try {
    await validatedUser.save();
    //save() is a function from mongodb
    res.status(201).json(validatedUser);
  } catch (err) {
    console.log("Error..!", err);
  }
  // console.log(req);
  /*body: {
        name: 'sachin',
        username: 'resss',
        email: 'tr@g.com',
        phoneNo: '787878787'
      },
      From this we are taking body and which contains the data*/
};
