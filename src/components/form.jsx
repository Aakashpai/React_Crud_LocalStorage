import React, { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router';
import './form.css'

const Forms = () => {

	const [employeesList, setemployeesList] = useState(JSON.parse(localStorage.getItem('employees')));
	const [Name, setName] = useState('');
	const [Emp_no, setEmp_no] = useState();
	const [location, setlocation] = useState('');

	useEffect(() => {
		localStorage.setItem('employees', JSON.stringify(employeesList));
	}, [employeesList])


	const handleAddEmpSubmit = (e) => {
		if (!Name && !Emp_no && !location) {
			alert('Fill the data first.')
		}
		else {
			let employee = {
				id: new Date().getTime().toString(),
				Name,
				Emp_no,
				location
			}
			setemployeesList([...employeesList, employee]);
			setName('');
			setEmp_no('');
			setlocation('');
			alert('Successfully Added!')
		}
	}



	return (
		<div>
			<form autoComplete="off" onSubmit={handleAddEmpSubmit} >
				<input placeholder='Employee Name' name="Name" id="Name" value={Name} onChange={(e) => setName(e.target.value)} /><br /><br />
				<input placeholder='Employee No.' name="Emp_no" id="Emp_no" value={Emp_no} onChange={(e) => setEmp_no(e.target.value)} /><br /><br />
				<input placeholder='Location' name="location" id="location" value={location} onChange={(e) => setlocation(e.target.value)} /><br /><br />
				<button type="submit">Submit</button>
			</form>
			<br /><br />
		</div>
	)
}

export default Forms