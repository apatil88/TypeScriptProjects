import { Router, Request, Response, NextFunction } from "express";

//extend from Request interface in express. Prevents assumptions made by type definition files regarding properties on an object.
//For example: body-parser middleware adds a 'body' property to Request object.
//However, if body-parser is not used, TypeScript still does not throw errors as there is a 'body' property in the imported Type Definition file causing undefined errors.
//The Type Definition file "assumes" there will be a body property of type 'any' on the object which is incorrect.
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

export { router };
