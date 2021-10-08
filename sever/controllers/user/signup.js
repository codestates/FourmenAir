const { user } = require('../../models');
const crypto = require('crypto');
const { generateAccessToken } = require('../tokenFunction');

module.exports = async (req, res) => {
  const { name, email, password, mobile, gender } = req.body

  if(!name || !email || !password || !mobile || !gender) {
    res.status(422).send('필수 항목을 모두 채워주세요.')
  }

  const salt = Math.round((new Date().valueOf() * Math.random())) + "";
  const hashedPassword = crypto.createHash("sha512").update(password + salt).digest("hex");

  const overlap = await user.findOne({
    where: { email: email }
  })

  if(overlap) {
    res.status(409).send('이미 존재하는 이메일입니다.')
  } else {
    const newUser = await user.create({
      name: name,
      email: email,
      password: hashedPassword,
      mobile: mobile,
      gender: gender,
      image: req.body.image || null,
      salt: salt
    })

    const accessToken = generateAccessToken(newUser)

    res.status(201)
    .cookie('jwt', accessToken)
    .json({ message: 'ok' });
  }
};