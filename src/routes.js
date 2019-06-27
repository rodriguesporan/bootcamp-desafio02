import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.post('/users', (req, res) => {
  const user = new User();
  user.save(req.body);
  return res.json(user);
});

export default routes;
