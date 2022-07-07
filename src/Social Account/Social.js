import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './Social.css'

const Social = () => {
//const [user,setUser]=useState(null)
const facebook=async(e)=>{
                        
                        e.preventDefault();
                         window.open("http://localhost:5000/auth/facebook","_self")
                         
                         
}
const linkdin=async(e)=>{
                        
  e.preventDefault();
   window.open("http://localhost:5000/auth/linkdin","_self")
   
   
}
// setUser(result)
const twitter=async(e)=>{
                        
  e.preventDefault();
   window.open("http://localhost:5000/auth/twitter","_self")
   
   
}
// setUser(result)
                        
                         
  return (           <div className="social-card">
                         <div>
                        
                         
                         </div>
                         <Card className='social'>
                         <img 
                         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Ffacebook-icon-red-24.png&f=1&nofb=1" 
                         alt=""
                         className='image'
                         
                         />
                        
                         <CardActions>
                           <Button size="small" color="error" onClick={facebook}>Link with Facebook</Button>
                           
                         </CardActions>
                       </Card>
                       <Card className='social'>
                         <img 
                         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fcomplete-set-icons%2F512%2Flinkedin512x512.png&f=1&nofb=1" 
                         alt=""
                         className='image'
                         
                         />
                        
                         <CardActions>
                           <Button size="small" color='error' onClick={linkdin}>Link with Likedin</Button>
                           
                         </CardActions>
                       </Card>
                       <Card className='social'>
                         <img 
                         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F855%2FPNG%2F512%2FTwitter_social_media_corporate_logo_icon-icons.com_67685.png&f=1&nofb=1" 
                         alt=""
                         className='image'
                         
                         />
                        
                         <CardActions>
                           <Button size="small" color='error' onClick={twitter}>Link with Twitter</Button>
                           
                         </CardActions>
                       </Card>

                       </div>
                       
  )
}

export default Social