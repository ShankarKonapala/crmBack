const jwt = require("jsonwebtoken");

// Authentication
module.exports.authenticateUser = (req, res, next) => {
  // Check whether access token exists in headers
  if (!req.headers["access-token"])
    return res.status(400).send({ msg: "Token not found" });

  // Verify Token
  try {
    const user = jwt.verify(req.headers["access-token"], process.env.SECRET_KEY);
    req.body.currentuser = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(400).send({ msg: "Unauthorised" });
  }
};

// Authorisation
// module.exports.authorizeUser = (req, res, next) => {
//   if (req.body.currentuser.role === "admin") next();
//   else
//     return res
//       .status(404)
//       .send({ msg: "Forbidden : No permission to access API" });
// };