import React, { forwardRef } from 'react'
// import '../../assets/css/ui.scss'

const Textbox = ({ placeholder, name, type, boxStyle, labelStyle }, ref) => {
	return (
		<div className='textbox '>
			<label className={`${labelStyle} block  mt-8 `}>{placeholder}</label>
			<input
				className={`${boxStyle} block bg-gray-100 py-4 w-full px-3 `}
				name={name}
				placeholder={placeholder}
				type={type}
				id={name}
				ref={ref}
			/>
		</div>
	)
}
const textref = forwardRef(Textbox)

export default textref
