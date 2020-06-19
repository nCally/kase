const jwt = require('jsonwebtoken');

const authMiddleware = function (req, res, next) {
  var header = req.headers['authorization'];
  let token;
  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    token = bearer[1];
  }
  if (!token) {
    res.status(401).json({ message: "No authorization header" })
  } else {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (!decoded) { res.status(401).json({ message: "Unauthorized request" }) }
      else {
        res.auth_user = decoded.user;
        next();
      }
    })
  }
}

module.exports = authMiddleware;