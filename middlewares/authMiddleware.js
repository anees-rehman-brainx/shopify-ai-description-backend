const jwtService = require('../services/jwtService');

const verifyUser = async (req, res, next) => {

  if (!req.headers.access_token)
    return res.status(403).json({ error: "'platform' required in headers" });
  
  const authHeader = req.headers.access_token;
  
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwtService.verifyToken(
      token,
      process.env.JWT_TOKEN_KEY,
      async (err, data) => {
        if (err) {
          return res.status(401).json({ error: 'Token is not valid!' });
        }

        if(!data?.is_verified){
          return res.status(401).json({ error: 'Token is not verified' });
        }

        next();
      }
    );
  } else {
    res.status(403).json({ error: "'access_token' required in headers" });
  }
};

module.exports = { verifyUser };
