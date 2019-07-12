import { Router, Request, Response } from 'express';

//extend from Request interface in express. Prevents assumptions made by type definition files regarding properties on an object.
//For example: body-parser middleware adds a 'body' property to Request object.
//However, if body-parser is not used, TypeScript still does not throw errors as there is a 'body' property in the imported Type Definition file causing undefined errors.
//The Type Definition file "assumes" there will be a body property of type 'any' on the object which is incorrect.
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email) {
    res.send(email + password);
  } else {
    res.send('You must provide an email');
  }
});

export { router };
