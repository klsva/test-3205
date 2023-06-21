import { NextFunction, Request, Response, Router } from "express";
import to from "await-to-js";
import userFindValidator from "../user-find.validator";
import { getData } from "../controller";
import { errorHandler } from "../error-handler";

const router = Router();
router.post(
  "/data",
  errorHandler,
  async (req: Request, res: Response, next: NextFunction) => {
    // it checks payload
    const payload = {
      email: req.body.email,
      number: req.body.number ? req.body.number : null,
    };
    if (payload.number) {
      payload.number = payload.number.split("-").join("");
    }

    async function getResult() {
      const [err, data] = await to(getData(payload));
      if (err) {
        return next("Bad request");
      }
      return res.status(200).send(data);
    }
    const { value, error } = userFindValidator(payload);
    if (error) {
      return res.status(400).send(error);
    }
    try {
      let timeout: any = null;
      timeout = setTimeout(getResult, 5000);
      while (timeout--) {
        clearTimeout(timeout);
      }
    } catch (err) {
      return err;
    }  
  }
);

export default router;
