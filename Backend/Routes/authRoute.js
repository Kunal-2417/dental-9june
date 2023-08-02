const  Router = require("express");
const { PhoneAuthController, googleAuthController, loginController, SignupController } = require ("../Controllers/authController.js");

const router = Router();

// register
// router.post("/register", registerController);

// login
// router.post("/login", loginController);

// google singin
router.post("/google", googleAuthController);
router.post("/phone", PhoneAuthController);
router.post("/login", loginController);
router.post("/checkUser", SignupController)

module.exports = router;
