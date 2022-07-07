import React from 'react'

import SendIcon from '@mui/icons-material/Send';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import IconButton from '@mui/material/IconButton';
import './DrawerItem.css'
import { useHistory } from 'react-router-dom';


const Drawers = () => {

const history = useHistory()

  return (
    <div className="container">
    
    <h3>
    <IconButton color="error" size="small" onClick={()=>history.push('/social')}>
    <ConnectWithoutContactIcon/> Social Account 
    </IconButton>
    </h3>
   

    
    <h3>
    <IconButton color="error" size="small" onClick={()=>history.push('/post')}>
    <SendIcon/> Post  
    </IconButton>
    </h3>
   

    
    <h3>
    <IconButton color="error" size="small" ><AnalyticsIcon/> Analytics</IconButton>
    </h3>
    
 
 
 
    
    </div>
  )
}

export default Drawers