
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'
//import Forms from './form'

const getDatafromLS = () => {
    const data = localStorage.getItem('employees');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

const List = () => {

    const [employeesList, setemployeesList] = useState(getDatafromLS());


    const deleteEmp = (ind) => {
        if (window.confirm('Are You Sure?')) {
            const filteredList = employeesList.filter((emp) => {
                return ind !== emp.id;
            })
            setemployeesList(filteredList);
        }
    }


    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employeesList));
    }, [employeesList])


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Location</th>
                        <th>Controls</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesList.map((emp, index) => {
                        return <tr key={emp.id}>
                            <td>{index + 1}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Emp_no}</td>
                            <td>{emp.location}</td>
                            <td><Button variant='outline-primary'><Link to={`/edit/${emp.id}`}>Edit</Link> </Button> &nbsp; &nbsp;
                                <Button variant='outline-danger' onClick={() => deleteEmp(emp.id)}>Delete</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default List