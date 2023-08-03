const  Razorpay = require('razorpay');
const  crypto = require("crypto");
const {PaymentModel} = require("../Model/Payment");

module.exports.orders = (req, res) => {

    let instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

    var options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
        currency: "INR",
    };

    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.send({ code: 500, message: 'Server Err.' })
        }
        return res.send({ code: 200, message: 'order created', data: order })
    });
}


module.exports.verfiy =  async (req, res) => {
const {razorpay_order_id,razorpay_payment_id} = req.body.response;


    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256',process.env.KEY_SECRET)
        .update(body.toString())
        .digest('hex');
    
    
    const isAuthenatic = expectedSignature === req.body.response.razorpay_signature
    console.log(isAuthenatic);
    if (isAuthenatic) {
        const PaymentSuccess = await new PaymentModel({
            razorpay_order_id: razorpay_order_id,
            razorpay_payment_id: razorpay_payment_id,

        });
         PaymentSuccess.save();
         res.status(201).send({
            success: true,
            message: "payment successfully",
            PaymentSuccess
          });
          
       
          return;

         
        
    } else {

        res.send({ code: 500, message: 'Sign Invalid' });
    }
}

