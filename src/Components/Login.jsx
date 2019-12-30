import React from 'react'
import Textbox from './UI/Textbox'
import Button from './UI/Button'
import { Link } from 'react-router-dom'
const Login = ({ method, action }) => {
	return (
		<div className='mt-32'>
			<form method={method} action={action} className='mt-32'>
				<div className='w-1/2 mx-auto'>
					<Textbox type='text' placeholder='Name' name='name' boxStyle='' labelStyle='fontSub1 font-bold' />
					<Textbox type='password' placeholder='Password' name='password' boxStyle='' labelStyle='fontSub1 font-bold' />
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
