const jwt =  require('jsonwebtoken');
const private_key = require('./secret');

const authMiddleware = (req, res, next) =>{
  const token = req.headers['access-token'];

  if (token) {
    jwt.verify(token, private_key, (err, decoded) =>{      
      if (err) {
        return res.status(401).json({ message: 'invalid token' });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No token provided.' });
  }
}

module.exports = authMiddleware;
