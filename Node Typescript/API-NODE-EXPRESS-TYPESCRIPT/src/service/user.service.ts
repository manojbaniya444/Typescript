import User, { UserDocument } from "../models/user.model";

export async function createUser(input: any) {
  try {
    const user = new User(input);
    return await user.save();
  } catch (error: any) {
    throw new Error(error);
  }
}
