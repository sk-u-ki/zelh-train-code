import jwt from 'jsonwebtoken';

export function generateToken(data, secret, expTime) {
    return jwt.sign(data, secret, { expiresIn: expTime });
}

export function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}