const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
  authTokens: [
    {
      authToken: {
        type: String,
        required: true,
      },
    },
  ],
});

adminSchema.methods.generateAuthTokenAndSaveUser = async function () {
  const authToken = jwt.sign({ _id: this._id.toString() }, "foo");
  this.authTokens.push({ authToken });
  await this.save();
  return authToken;
};

adminSchema.statics.findUser = async (email, password) => {
  const user = await Admin.findOne({ email });
  if (!user) throw new Error("Erreur, impossible de se connecter");
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Erreur, impossible de se connecter");
  return user;
};

adminSchema.pre("save", async function () {
  if (this.isModified()) this.password = await bcrypt.hash(this.password, 8);
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
