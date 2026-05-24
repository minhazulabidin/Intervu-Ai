const { verifyToken } = require("@clerk/backend");
const userModel = require("../model/user.model");

exports.authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    // verify clerk token
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    // database user check
    const user = await userModel.findOne({
      clerkId: payload.sub,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found in database",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
