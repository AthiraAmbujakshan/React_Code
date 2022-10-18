import React from 'react'
import Select from 'react-select'

const options=[
	{label:'React', value:'react'},
	{label:'ReactNative', value:'react-native'},
	{label:'JavaScript', value:'js'},
	{label:'CSS', value:'css'}
	
]

function CustomSelect({style, label}){
	return(
		<div style ={style}>
			<h1>{label}</h1>
			<Select options={options} />
		</div>
	)
}export default CustomSelect