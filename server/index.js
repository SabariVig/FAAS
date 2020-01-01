const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./Models/User')
const Auth = require("./Routes/Auth")
const cors=require('cors')



app.use(express.json())
app.use(cors())
mongoose.connect(
	'mongodb+srv://Node:yormotherizgey@faas-j6cxt.mongodb.net/faas?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Database Connected')
	}
)

app.get('/', (req, res) => {
	res.send('Hello world!')
})



app.use("/auth",Auth)

app.post('/', (req, res) => {
	const lol = new User( {
		name: req.body.name,
		pass: req.body.password
    })
    try{
        lol.save()
    }
    catch(e){
        console.log(e)
    }

	res.send('Hello world!')
})



app.listen(8080, () => {
	console.log('Starting Server')
})
