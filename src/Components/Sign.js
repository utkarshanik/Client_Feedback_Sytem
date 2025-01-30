import React, { useState } from 'react'
import '../css/sign.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export default function Sign() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	// const [message2, setMessage2] = useState('');
	const navigate = useNavigate()
	
	const handleSignin = async (e) => {
	  e.preventDefault();
  
	  try {
		// Make a POST req to Render just gave path in $api_URL
		const response = await axios.post(`${API_URL}/api/auth/createUser`, {
		  name,
		  email,
		  password,
		});

		// Original one with localhost:5000  
		// const response = await axios.post('http://localhost:5000/api/auth/createUser', {
		//   name,
		//   email,
		//   password,
		// });
		
		// Handle success
		setMessage(response.data.message);
		document.getElementById('chk').checked = false;

	} catch (error) {
		// Handle error
		if (error.response) {
			setMessage(error.response.data.error);
		} 
		else if (error.request) {
            // Request was made but no response received (Server Down)
            setMessage("Server disconnected  Please try again later.");
        } 
		else {
			setMessage('Something went wrong Please try again later.');
		}
	}
	setTimeout(() => {
		setMessage('')
	}, 1500);
	
}

const handleLogin=async(e)=>{
	e.preventDefault();
	try {


		const response=await axios.post(`${API_URL}/api/auth/loginUser`,{
			email,
			password,
		})

		// const response=await axios.post('http://localhost:5000/api/auth/loginUser',{
		// 	email,
		// 	password,
		// })
		
		// Destructring into (token & message)
		const{token,message}= response.data;
		
		const decodedToken = jwtDecode(token);
		const userRole = decodedToken.user.role;
		
		// Store token and role in local storage
		localStorage.setItem('token', token);
		localStorage.setItem('role', userRole);
		
		if (userRole === "admin") {
			navigate('/admin');     //Admin-specific page
		  } else {
			navigate('/mainpage');  // Regular user page
		  }

		setMessage(message);
	} catch (error) {
		if (error.response) {
			setMessage(error.response.data.error);
			document.getElementById('chk').checked = true;
		} 
		else if (error.request) {
            setMessage("Server disconnected  Please try again later.");
        } 
		else {
			setMessage('Something went wrong Please try again later.');
		}
	}
	setTimeout(() => {
		setMessage('')
	}, 1500);
}
  return (
    <div className='parentcontainer'>
        <div className="mainp">  	

		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="login">
				<form onSubmit={handleLogin}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email" required={true}/> 
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="pswd" placeholder="Password" required={true}/>
					<button className='signlog'>Login</button>
				</form>
				{message && <p>{message} </p>}
			</div>
			<div className="signup">
				<form onSubmit={handleSignin}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="name" value={name} onChange={(e)=>setName(e.target.value)} name="txt" placeholder="User name" required={true}/>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email" required={true}/>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="pswd" placeholder="Password" required={true}/>
					<button className='signlog' type='submit'>Sign up</button>
				</form>
				{message && <p>{message} </p>}
			</div>
	</div>
    </div>
  )
}
