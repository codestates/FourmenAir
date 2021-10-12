// 특정 포스트가 선택되면, 전달된 객체를 바탕으로 DB에서 post를 찾아 전달
// 게시판에서 새로고침이나 댓글 작성시 조회수가 증가하지 않도록 수정 필요
const { post, tags } = require('../../models');

module.exports = async (req, res) => {
  const id = req.params.id.split(':')[1];

  const isItExist = await post.findOne({
    where: { id: id }
  })

  if(!isItExist) {
    res.status(404).send("데이터가 존재하지 않습니다.")
  }

  await post.findOne({
    where: { id: id }
  })
  .then(selectedPost => {
    selectedPost.increment('viewCount', { by: 1 });
  })

  const findedPost = await post.findOne({
    include: [
      { model: tags, attributes: ["localTag", "seasonTag"] }
    ],
    where: { id: id }
  })

  res.status(200).json({ data: { post: findedPost } })
};

