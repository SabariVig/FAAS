import React from 'react'
import Textbox from './UI/Textbox'
import Button from './UI/Button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import axios from 'axios'

const Schema = yup.object().shape({
	email: yup.string().email('Enter A Vaild Email').required('Email Is Required'),
	password: yup
		.string()
		.min(8, 'Password Must Atleast Contain 8 Characters')
		.max(255)
		.required('Passowrd Is Required')
})

const Login = () => {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: Schema,
		mode: 'onChange'
	})
	const onSubmit = async (data) => {
		console.log(data)
		const config = {
			headers: {
				'content-type': 'application/json',
				"Access-Control-Allow-Origin": "*"	
			}
		}
		axios
			.post('http://localhost:8080/auth/login', data, config)
			.then((response) => {
				console.log(response.headers.token)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div className='mt-32'>
			<form onSubmit={handleSubmit(onSubmit)} className='mt-32'>
				<div className='w-1/2 mx-auto'>
					<Textbox
						type='email'
						placeholder='Email'
						ref={register}
						name='email'
						boxStyle=''
						labelStyle='fontSub1 font-bold'
					/>
					{errors.email && <h1>{errors.email.message}</h1>}
					<Textbox
						type='password'
						placeholder='Password'
						ref={register}
						name='password'
						boxStyle=''
						labelStyle='fontSub1 font-bold'
					/>
					{errors.password && <h1>{errors.password.message}</h1>}
					<Button type='submit' value='Login' name='loginbtn' className='mt-10' />
					<div className=' fontSub1 font-bold my-3'>
						Do You Already Have An Account?
						<Link to='/register' className=' ml-1 text-primary-light'>
							Login
						</Link>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Login
