const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunction');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);

  if(accessTokenData) {
    await user.destroy({
      where: { email: accessTokenData.email }
    })

    res.status(200).send('successfully resigned!')
  } else {
    res.status(400).send(`you're currently not logined`)
  }
};
