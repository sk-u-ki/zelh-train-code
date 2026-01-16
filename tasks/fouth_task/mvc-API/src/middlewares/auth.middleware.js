import { verifyToken } from '../utils/jwt.js';

export const auth = ((req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }
  
  next();
});

export default auth;