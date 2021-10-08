module.exports = {
  login: require('./user/login'),
  signup: require('./user/signup'),
  signout: require('./user/signout'),
  resign: require('./user/resign'),
  edit: require('./user/edit'),
  info: require('./user/info'),

  post: require('./post/post'),

  comment: require('./comment/comment')
};