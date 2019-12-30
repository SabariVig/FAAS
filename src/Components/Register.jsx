import React from 'react'
import Button from './UI/Button'
import Textbox from './UI/Textbox'
import { Link } from 'react-router-dom'
const Register = ({ method, action }) => {
	return (
		<form className='mt-32'>
			<div className='w-1/2 mx-auto'>
				<Textbox type='text' placeholder='Name' name='name' labelStyle='fontSub1 font-bold' boxStyle='' />
				<Textbox type='text' placeholder='Email' name='email' labelStyle='fontSub1 font-bold' boxStyle='' />
				<Textbox type='password' placeholder='Password' name='password' labelStyle='fontSub1 font-bold' />
				<Textbox type='password' placeholder='Confirm Password' name='confpassword' labelStyle='fontSub1 font-bold' />
				<div className='flex w-1/2'>
					<div className=' '>
						<Button type='submit' value='Register' name='loginbtn' className='mt-10 fontH6 font-bold' />
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
