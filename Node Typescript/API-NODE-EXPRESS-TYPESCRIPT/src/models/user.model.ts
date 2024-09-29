import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { string } from "zod";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(userPassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: string,
      required: true,
      unique: true,
    },
    name: {
      type: string,
      required: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async (next: any) => {
  let user = this as unknown as UserDocument;
  if (user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltFactor"));
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;
  return next();
});

userSchema.methods.comparePassword = async (
  userPassword: string
): Promise<boolean> => {
  const user = this as unknown as UserDocument;

  return bcrypt.compare(userPassword, user.password).catch((error) => false);
};

const User = mongoose.model("User", userSchema);
export default User;
