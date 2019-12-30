import React from 'react'

const Button = ({ type, name, value, className }) => {
	return <input className= {`block bg-primary-light p-5 px-8 text-white ${className}` } type={type} name={name} value={value} />
}

export default Button
