import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginComponent from '../LoginComponent/LoginComponent'
import SignupComponent from '../SignupComponent/SignupComponent'

const RegistrationNavigationComponent = () => {
  return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/Signup'>Signup</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route exact path='/login' element={<LoginComponent/>}></Route>
                <Route exact path='/Signup' element={<SignupComponent/>}></Route>
            </Routes>
        </Router>
    )
}

export default RegistrationNavigationComponent