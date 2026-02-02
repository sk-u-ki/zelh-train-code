import nodemailer from "nodemailer";

export const createTransport = (GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID, 
                                GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET, 
                                GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN) => nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "kirillstavratii@gmail.com",
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    refreshToken: GOOGLE_REFRESH_TOKEN,
  },
});
