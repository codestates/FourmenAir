const { sign } = require('jsonwebtoken');
const { isAuthorized } = require('../../controllers/tokenFunction')

module.exports = async (req, res) => {
  res.status(205)//.cookie('jwt', expiredToken)
  .json({ data: {message: 'successfully signed out!', accessToken: ''} })
};
