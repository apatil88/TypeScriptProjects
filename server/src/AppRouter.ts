import express from 'express';

export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    //If we are creating the AppRouter very first time
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
