import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import { createUserInput } from "../schema/user.schema";

async function createUserHandler(
  req: Request<{}, {}, createUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return user;
  } catch (error) {
    console.log("Error creating user: ", error);
    return res.status(409).send(error);
  }
}

export { createUserHandler };
