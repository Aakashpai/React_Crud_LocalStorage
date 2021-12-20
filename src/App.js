import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import Forms from './components/Form'
import List from './components/list'



class App extends Component {
 
  render() {
    return (
      <Routes>
        <Route exact path='/' element={<List/>}/>
        <Route exact path='/add' element={<Forms/>}/>
        <Route exact path='/edit/:id' element={<Forms/>}/>
      </Routes>
    )
  }
}

export default App