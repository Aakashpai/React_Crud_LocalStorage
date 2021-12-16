import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import EditEmp from './components/editEmp'
import Forms from './components/form'
import List from './components/list'



class App extends Component {
 
  render() {
    return (
      <Routes>
        <Route exact path='/' element={<List/>}/>
        <Route exact path='/form' element={<Forms/>}/>
        <Route exact path='/edit/:id' element={<EditEmp/>}/>
      </Routes>
    )
  }
}

export default App