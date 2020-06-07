
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../../db/models/user");
const moment = require("moment");


module.exports = {

  async create(details) {
    try {
      let password = await bycrypt.hash(details.password, 10);

      try {
        let newUser = await user.create({ ...details, password });
        if (newUser) {
          return 200;
        } else {
          return 400;
        }
      } catch (error) {
        return 400;
      }
    } catch (error) {
      return 501;
    }
  },

  async login(email, password) {
    try {

      let existing_user = await user.findOne({ where: { email } });

      if (existing_user !== null) {

        existing_user = existing_user.get({ plain: true });
        const isPasswordSame = await bycrypt.compare(password, existing_user.password);
        if (isPasswordSame) {
          return {
            code: 200,
            message: 'success',
            data: {
              token: jwt.sign({ user: existing_user.id }, process.env.JWT_SECRET, { expiresIn: '100h' }),
              expiresIn: moment().add(11, 'hours')
            }
          }
        } else {
          return { code: 403, message: 'email or password might be incorrect', data: null }
        }

      } else {
        return { code: 403, message: 'email or password might be incorrect', data: null }
      }

    } catch (error) {
      return { code: 501, message: 'could not perform action', data: null }
    }
  }
}