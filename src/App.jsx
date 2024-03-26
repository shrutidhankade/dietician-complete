import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/signup'
import Signin from './Components/signin'
import About from './Components/About'
import Contact from './Components/Contact'
import Admin from './Components/Admin'
import Forget from './Components/Forget'
import ImageUpload from './Components/ImageUpload'
import VerifyPassword from './Components/VerifyPassword'
import ResetPassword from './Components/ResetPassword'



const App = () => {
	return (

		<div>
			<Routes >
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="signup" element={<Signup />} />
				<Route path="signin" element={<Signin />} />
				<Route path="admin" element={<Admin />} />
				<Route path="Forget" element={<Forget />} />
				{/* <Route path={`/Forget/:id`} element={<Forget />} /> */}
				<Route path="ImageUpload" element={<ImageUpload />} />
				<Route path="VerifyPassword" element={<VerifyPassword />} />
				<Route path={`/VerifyPassword/:id`} element={<VerifyPassword />} />
				<Route path="ResetPassword" element={<ResetPassword />} />

				<Route path={`/ResetPassword/:id`} element={<ResetPassword />} />

				






				{/* <Route path="user/:userId" element={<User />} /> */}

			</Routes>

		</div>
	)
}

export default App