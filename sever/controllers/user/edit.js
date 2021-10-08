const { user } = require('../../models');
const crypto = require('crypto')
const { isAuthorized } = require('../tokenFunction');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);

  if(accessTokenData) {
    const userData = await user.findOne({
      where: { email: accessTokenData.email }
    })

    if(req.body.name) {
      if(userData.name !== req.body.name) {
        await user.findOne({
          where: { email: accessTokenData.email }
        })
        .then(user => {
          user.update({name: req.body.name})
        })
      }
    } else if(req.body.mobile) {
      if(userData.mobile !== req.body.mobile) {
        await user.findOne({
          where: { email: accessTokenData.email }
        })
        .then(user => {
          user.update({mobile: req.body.mobile})
        })
      }
    } else if(req.body.gender) {
      if(userData.gender !== req.body.gender) {
        await user.findOne({
          where: { email: accessTokenData.email }
        })
        .then(user => {
          user.update({gender: req.body.gender})
        })
      }
    } else if(req.body.image) {
      if(userData.image !== req.body.image) {
        await user.findOne({
          where: { email: accessTokenData.email }
        })
        .then(user => {
          user.update({image: req.body.image})
        })
      }
    } else if(req.body.password) {
      const DBpassword = userData.password
      const inputPassword = req.body.password
      const salt = userData.salt
      const hashedPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");
      
      if(DBpassword !== hashedPassword) {
        await user.findOne({
          where: { email: accessTokenData.email }
        })
        .then(user => {
          user.update({password: hashedPassword})
        })
      }
    }

    let newUserData = {
      id: userData.id,
      name: req.body.name || userData.name,
      email: req.body.email || userData.email,
      mobile: req.body.mobile || userData.mobile,
      gender: req.body.gender || userData.gender,
      image: req.body.image || userData.image,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt
    }

    res.status(201)
    // .cookie('jwt', req.cookies.jwt)
    .cookie('jwt', req.headers.authorization.split(' ')[1])
    .json({ data: { userInfo: newUserData } })
  }
}