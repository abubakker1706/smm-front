
//import './App.css';
import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar'
import Drawers from './components/Drawer'
import Post from './Post/Post'
import {Switch,Route,useHistory} from 'react-router-dom'
import Social from './Social Account/Social'
import Login from './components/Login'
import Signup from './components/Signup'



function App() {
  
  const history=useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/user/login/success", {
        method: "GET",
        
        
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user)
  return (
    <div className="App">
    <NavBar />
    <Switch>

    

<Route exact path="/login">
<Login user={user}/>
</Route>





<Route exact path='/signup'>

<Signup/>
</Route>

{user?<Route path='/'>
    <Drawers/>
     <Route path='/post'>
     <Post />
     </Route>
     <Route path='/social'>
     <Social />
     </Route>
    
    
    </Route>:<Login/>}
    
    
  



</Switch>
   
    
     
    </div>
  );
}

export default App;


