import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Forms = () => {

	const [employeesList, setemployeesList] = useState(JSON.parse(localStorage.getItem('employees')));
	const [Name, setName] = useState('');
	const [Emp_no, setEmp_no] = useState();
	const [location, setlocation] = useState('');
	const { id } = useParams();

	useEffect(() => {
		localStorage.setItem('employees', JSON.stringify(employeesList));
		if (id) {
			const newEmp = employeesList.find((emp) => {
				return emp.id === id
			})
			setName(newEmp.Name);
			setEmp_no(newEmp.Emp_no);
			setlocation(newEmp.location);
		}
	}, [employeesList])


	const handleSubmit = (e) => {
		e.preventDefault();
		if (!Name && !Emp_no && !location) {
			alert('Fill the data first.')
		} else if (id) {
			setemployeesList(
				employeesList.map((emp) => {
					if (emp.id === id) {
						return { ...emp, Name: Name, Emp_no: Emp_no, location: location }
					}
					return emp;
				})
			)
			alert('Successfully updated!')
		} else {
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
			<form autoComplete="off" onSubmit={handleSubmit} style={{ textAlign: "center" }} >
				<input placeholder='Employee Name' name="Name" id="Name" value={Name} onChange={(e) => setName(e.target.value)} /><br /><br />
				<input placeholder='Employee No.' name="Emp_no" id="Emp_no" value={Emp_no} onChange={(e) => setEmp_no(e.target.value)} /><br /><br />
				<input placeholder='Location' name="location" id="location" value={location} onChange={(e) => setlocation(e.target.value)} /><br /><br />
				<button type="submit">{!id ? "Add" : "Update"}</button>
			</form>
		</div>
	)
}

export default Forms;
