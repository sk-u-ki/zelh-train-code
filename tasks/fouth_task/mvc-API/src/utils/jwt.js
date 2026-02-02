import jwt from 'jsonwebtoken';

export function generateToken({data, secret = process.env.JWT_SECRET, expTime = '1h'}) {
    return jwt.sign(data, secret, { expiresIn: expTime });
}

export function verifyToken(token, secret = process.env.JWT_SECRET) {
    return jwt.verify(token, secret);
}