const { user } = require('../../models');
const crypto = require('crypto')
const { generateAccessToken, sendAccessToken } = require('../tokenFunction');

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { email: req.body.email }
  })

  if(!userInfo) {
    res.status(401).send('Invalid user')
  }

  const DBpassword = userInfo.password
  const inputPassword = req.body.password
  const salt = userInfo.salt
  const hashedPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  if(DBpassword === hashedPassword) {
    const token = generateAccessToken(userInfo)
    sendAccessToken(res, token)
  } else {
    res.status(401).send('Invalid user or Wrong password')
  }
};
