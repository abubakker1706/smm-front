import React,{useState} from 'react'
import './Post.css'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

import CopyrightIcon from '@mui/icons-material/Copyright';

import CardContent from '@mui/material/CardContent';
//import SocialPost  from "social-post-api";
const Post = () => {
  const[post,setPost]=useState('')
  // const Access="AQUcxeBXQJjnbuQLNlDIfrha1H9QVpYh5I0QvFV1HTA0NVKFaZxhBGgcGUEPyJNKBzQcaFKUrU1s3y7of0ysYKTbQ4A1rcaujDe8HTPUtD1BYxpPTP8fcHNudtgL6paBqpCO6bSpVyQdT9Y_UkOEOXo8ncGMHJJvarluRk4rc7bsBfZmTZvTm-ZxxzSj5HH_I1HIw6RgmuwWV0E2VzI-5VyO4iUm8ODzqffBxDZv8sGPWA2SCMlh_BCqCDZZRmeC2A6SCnVmkk4jzY__u3e1BONZpVWYWIjG7KHiu88MfVxt4XopsLOPHLtPCrCO983azMAI3he6IgJsp0pj8DQFHRr_o36kJA"

         
     
  return (

    <Card className="card" >
    <h1 style={{color: 'red',fontSize:'20px'}}>Create Post <CopyrightIcon size='small'/></h1>
    <CardContent className="input">
    
    
  
    
    
   <form  className="form" >


   
   <TextField
    type="text" 
    label='Type your post' 
    variant='standard' 
    sx={{width:500}} 
    onChange={(event)=>setPost(event.target.value)}
     value={post} />
  
   <div >
  
   <input type="checkbox" />
   <span>Shorten link</span>
   </div>
   <div>
   
   <input type="file"/>
  
   
   </div>
   <div>
   <button type="submit">Post Now</button>
  
   <span>Schedule Post</span>
   <input type="date"/>
   
   </div>
   
   </form>
   </CardContent>
    
   </Card>
    
    
  )
}

export default Post