import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Signup.css'
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const Signup=()=>{
const [username,setUserName]=useState('')
const[email,setEmail]= useState('')
const[password,setPassword]= useState('')
const history =useHistory()

const formHandler = async (event)=>{
event.preventDefault();

try {
                         const res = await axios
                           .post('http://localhost:5000/user/register', {
                             username: username,
                             email: email,
                             password: password,
                           })
                           .catch((err) => alert(err.response.data.message));
                   
                         const data = await res.data;
                         alert(data.message);
                         console.log(data)
                         if (data.message==='Account created successfully'){
                          history.push('/login')
                         }
                         return data;
                       } catch (error) {
                         console.log(error);
                       }


}
return (
<div className="container">

<Card className='cards'>
<CardContent className='card-signup'>
<h3 style={{color:'red'}}>Signup</h3>
<form onSubmit={formHandler} className='signup'>

<TextField 

type="text"
label="Username" 
InputProps={{
                         startAdornment: (
                           <InputAdornment position="start">
                           <PersonIcon color="error"/>
                           </InputAdornment>
                         ),
                       }}
value={username} 
onChange={(e)=>setUserName(e.target.value)}
variant="filled"
/>
<TextField 

type='email' 
label="Email"
InputProps={{
                         startAdornment: (
                           <InputAdornment position="start">
                           <EmailIcon color="error"/>
                           </InputAdornment>
                         ),
                       }}
value={email}
onChange={(e)=>setEmail(e.target.value)}
variant="filled"
/>
<TextField 
type='password' 
label="Password"
InputProps={{
                         startAdornment: (
                           <InputAdornment position="start" >
                           <PasswordIcon  color="error"/>
                           </InputAdornment>
                         ),
                       }}
value={password}
onChange={(e)=>setPassword(e.target.value)}
variant="filled"

/>
<Button type="submit" color='error' startIcon={< AssignmentIndIcon />}>Register</Button>


</form>
<p>Already a member? <Button color='error' onClick={()=>history.push('/login') }>login</Button></p>
</CardContent>

</Card>


</div>
)
}
export default Signup