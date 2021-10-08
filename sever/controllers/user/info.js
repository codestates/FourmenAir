const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunction');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);

  if(accessTokenData) {
    const originUserData = await user.findOne({
      where: { email: accessTokenData.email }
    })

    const userData = {
      id: originUserData.id,
      name: originUserData.name,
      email: originUserData.email,
      mobile: originUserData.mobile,
      gender: originUserData.gender,
      image: originUserData.image,
      createdAt: originUserData.createdAt,
      updatedAt: originUserData.updatedAt
    }

    res.status(200)
    // .cookie('jwt', req.cookies.jwt)
    .cookie('jwt', req.headers.authorization.split(' ')[1])
    .json({ data: { userInfo: userData } })
  }
}