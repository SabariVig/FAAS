import React from 'react'
import Button from './UI/Button'
import Textbox from './UI/Textbox'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Schema = yup.object().shape({
	email: yup.string().email('Enter A Vaild Email').required('Email Is Required'),
	name: yup.string("Name Must Be String").required("Name Is Required"),
	password: yup.string().min(8,"Password Must Atleast Contain 8 Characters").max(255).required("Passowrd Is Required"),
	confpassword:yup.string().oneOf([yup.ref("password"), null], "Passwords Must Match").required("Password  is required")
})

const Register = ({ method, action }) => {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: Schema,
		mode: "onChange",
	})
	const onSubmit = (data) => {
		console.log(data)
		// console.log(errors)
	}
	return (
		<form className='mt-32'>
			<div className='w-1/2 mx-auto'>
				<Textbox
					type='name'
					placeholder='Name'
					ref={register}
					name='name'
					boxStyle=''
					labelStyle='fontSub1 font-bold'
				/>
				{errors.name && <h1>{errors.name.message}</h1>}
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
				<Textbox
					type='password'
					placeholder='Confirm Password'
					ref={register}
					name='confpassword'
					boxStyle=''
					labelStyle='fontSub1 font-bold'
				/>
				{errors.confpassword && <h1>{errors.confpassword.message}</h1>}

				<div className='flex w-1/2'>
					<div className=' '>
						<Button
							type='submit'
							onClick={handleSubmit(onSubmit)}
							value='Register'
							name='loginbtn'
							className='mt-10 fontH6 font-bold'
						/>
					</div>
				</div>
				<div className=' fontSub1 font-bold my-3'>
					Do You Already Have An Account?
					<Link to='/login' className=' ml-1 text-primary-light'>
						Login
					</Link>
				</div>
			</div>
		</form>
	)
}

export default Register
