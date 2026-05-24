const { verifyToken } = require("@clerk/backend");
const userModel = require("../model/user.model");
const { apiResponse } = require("../helper/apiResponse");

exports.isAutorize = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return apiResponse(res, 401, "Unauthorized");
    }

    const token = authHeader.split(" ")[1];

    // verify clerk token
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    // database user check
    const user = await userModel.findOne({
      clerkUserId: payload.sub,
    });

    if (!user) {
      return apiResponse(res, 401, "User not found in database");
    }

    req.user = user;

    next();
  } catch (error) {
    return apiResponse(res, 401, "Invalid token");
  }
};
