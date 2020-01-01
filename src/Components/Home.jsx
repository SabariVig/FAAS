import React from 'react'
import Login from './Login'
import Welcome from './Welcome'
import Register from './Register'
import { Switch, Route } from 'react-router-dom'
const Home = () => {
	return (
		<div>
			<div className='flex'>
				<div className='w-1/2 h-screen welcome-bg'>
					<Welcome />
				</div>
				<div className='w-1/2 h-screen bg-white'>
					{/*<div className='mt-16'>
						<h2 style={{ fontWeight: 700 }} className='fontH4 mt-16 mx-auto text-bold'>
							Welcome Back!
						</h2>
					</div> */}
					<Switch>
						<Route path='/login' exact component={Login} />
						<Route path='/register' exact component={Register} />
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Home
