import { verifyToken } from '../utils/jwt.js';

export const auth = ((req, res, next) => {
  const token = req.headers['authorization'];
  req.user = verifyToken(token, process.env.JWT_SECRET);
  next();
});