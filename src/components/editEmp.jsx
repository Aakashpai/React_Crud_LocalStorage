import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const EditEmp = () => {
	const [employeesList, setemployeesList] = useState(JSON.parse(localStorage.getItem('employees')));
	const [Name, setName] = useState('');
	const [Emp_no, setEmp_no] = useState();
	const [location, setlocation] = useState('');
	const { id } = useParams();


	const newEmp = employeesList.find((emp) => {
		return emp.id === id
	})

	useEffect(() => {
		localStorage.setItem('employees', JSON.stringify(employeesList));
		setName(newEmp.Name);
		setEmp_no(newEmp.Emp_no);
		setlocation(newEmp.location);
	}, [employeesList])


	const handleSubmit = (e) => {
		e.preventDefault();
		setemployeesList(
			employeesList.map((emp) => {
				if (emp.id === id) {
					return { ...emp, Name: Name, Emp_no: Emp_no, location: location }
				}
				return emp;
			})
		)
		alert('Successfully updated!')
	}


	return (
		<div>
			<form autoComplete="off" onSubmit={handleSubmit} >
				<input placeholder='Employee Name' name="Name" id="Name" value={Name} onChange={(e) => setName(e.target.value)} /><br /><br />
				<input placeholder='Employee No.' name="Emp_no" id="Emp_no" value={Emp_no} onChange={(e) => setEmp_no(e.target.value)} /><br /><br />
				<input placeholder='Location' name="location" id="location" value={location} onChange={(e) => setlocation(e.target.value)} /><br /><br />
				<button type="submit">Update</button>
			</form>
		</div>
	)
}

export default EditEmp
