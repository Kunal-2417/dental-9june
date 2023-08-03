const mongoose=require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
    //  userId: {
    //     ref: "userModel",
    //      type: String,
    //      required: true,
        
    //  },
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id:{
        type: String,
        required: true,
    },



    }
)
module.exports={PaymentModel: mongoose.model("Payment", PaymentSchema)};