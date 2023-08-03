const  Router = require("express");
const { PhoneAuthController, googleAuthController, loginController, SignupController } = require ("../Controllers/authController.js");
const User = require("../Model/User.js")
const router = Router();



router.post("/google", googleAuthController);
router.post("/phone", PhoneAuthController);
router.post("/login", loginController);
router.post("/checkUser", SignupController)
// Route to update user's subscription
router.put('/:id/subscription', async (req, res) => {
    const { id } = req.params;
    const { subscription, subscriptionType } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { subscription, subscriptionType },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.json(user);
    } catch (error) {
      console.error('Error updating subscription:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  });
  
  
module.exports = router;
