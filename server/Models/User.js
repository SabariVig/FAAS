const mongoose = require('mongoose')

const User = mongoose.Schema({
	name: {type:String,required:true},
	email:{type:String,required:true},
	password: {type:String,required:true},
	token:{type:String}
})




module.exports= mongoose.model("users",User)







