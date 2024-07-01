const Stripe = require('stripe')
const Order = require('../models/orderModel')
const User = require('../models/userModel')

const stripe = new Stripe(process.env.STRIPE_KEY)

const placeOrder = async(req,res) =>{
    const user = await User.findById(req.userId)
    if(!user){
        return res.json({success:false,message:"User not found."})
    }
    
    try{
        const newOrder = new Order({
            userId:req.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address

        })
        await newOrder.save()

        res.json({success:true,message:"order successfull."})

    }catch(error){
        res.json({success:false,message:"Error"})
    }
}

module.exports = {
    placeOrder
}