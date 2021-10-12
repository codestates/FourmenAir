const { comment, user } = require('../../models')
const { isAuthorized } = require('../tokenFunction')

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req, res);

  if(accessTokenData) {
    const data = await accessTokenData
    .then(user => { return user })

    const userData = await user.findOne({
      where: { email: data.email }
    })

    const userId = userData.id

    const postedComment = await comment.create({
      content: req.body.content,
      userId: userId,
      postId: req.body.postId
    })

    // 작성한 comment만 전달할지, 작성된 것을 포함한 모든 comment를 전달할지
    res.status(201).json({ data: { comment: postedComment } })
  }
};
