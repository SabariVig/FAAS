const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const joi = require('@hapi/joi')
const jwt = require('jsonwebtoken')

const schema = joi.object({
	name: joi.string().required().max(255),
	email: joi.string().email().required(),
	password: joi.string().min(8).max(255).required(),
	confpass: joi.ref('password')
})

const loginSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(8).max(255).required()
})

router.post('/register', async (req, res) => {
	const input = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		confpass: req.body.confpass
	}

	const db = await User.findOne({ email: input.email })

	try {
		await schema.validateAsync(input)
	} catch (error) {
		return res.status(400).send(error)
	}

	if (db) {
		return res.status(403).send('Email Already Exists')
	}

	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(input.password, salt)

		input.password = hashedPassword
	} catch (err) {
		return res.send('Bcrypt Error')
	}
	input.confpass = null

	const userObj = new User(input)
	try {
		await userObj.save()
		const token = await jwt.sign(input, 'ass123boobs456pussy666nobutt', { expiresIn: 60 * 1 })
		return res.header('token', token).send('Register Succesful')
	} catch (err) {
		return res.status(500).send('Database Error' + err)
	}
})

router.post('/login', async (req, res) => {
	const input = {
		email: req.body.email,
		password: req.body.password
	}
	const user = await User.findOne({ email: input.email })


	if (!user) return res.status(403).send('No Email Found')


	try {
		const validPass = await bcrypt.compare(input.password, user.password)
		if (!validPass) return res.status(400).send('Password Is Not Valid')
	} catch (error) {
		return res.status(403).send('Error comparing in bcrypt' + error)
	}

	try {
		const token = await jwt.sign(input, 'ass123boobs456pussy666nobutt', { expiresIn: 60 * 1 })
		return res.header('token', token).send('Login Succesful')
	} catch (err) {
		return res.status(500).send('Database Error' + err)
	}
})

module.exports = router
