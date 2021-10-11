// comment 목록을 postId에 맞춰 찾아 배열로 반환
const { comment } = require('../../models')

module.exports = async (req, res) => {
  const commentByPostId = await comment.findAll({
    where: { postId: req.query.postid }
  })

  if(commentByPostId.length <= 0) {
    res.status(404).send("댓글이 존재하지 않습니다.")
  } else {
    res.status(200).json({ data: { comment: commentByPostId } })
  }
};
