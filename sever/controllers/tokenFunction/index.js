require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    const userData = {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
      gender: data.gender,
      image: data.image,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }

    return sign(userData, process.env.ACCESS_SECRET, {expiresIn: '1h'});
  },
  sendAccessToken: (res, accessToken) => {
    res.status(200)
    .cookie('jwt', accessToken)
    .json({ data: { accessToken }, message: 'ok' });
  },
  isAuthorized: (req) => {
    // const token = req.cookies.jwt;
    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
      return null
    }
    return verify(token, process.env.ACCESS_SECRET)
  }
};
