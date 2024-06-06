import { Router } from "express";
import {
  create,
  login,
  read,
  readOne,
  update,
  destroy,
} from "../controllers/user.controller";

import verifyToken from "../middleware/auth";

const usersRouter = Router();

usersRouter.post("/", create);
usersRouter.post("/login", login);
usersRouter.get("/", verifyToken, read);
usersRouter.get("/:uid", readOne);
usersRouter.put("/:uid", update);
usersRouter.delete("/:uid", destroy);

export default usersRouter;
