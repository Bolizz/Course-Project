import React, { useState , useEffect} from 'react'
import './../index.css'
import { useHistory } from "react-router-dom";
import data from './ADMIN_DATA.json'


export async function loginee(a){
    if (a === 1){
        return true;
    }else{
    return false;
    }
}


function Login(){
  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  const [inkorrect , setInkorrect] = useState(false)
  const [loginned, setLoginned] = useState(0)
  const history = useHistory();

   
  function log(e){
    e.preventDefault();
    
    if (email === data[0].email && password === data[0].password){
        loginee(1)
        history.replace('/admin');  
    }else{
        setInkorrect(true);
        setEmail("");
        setPassword("");
    } 
  }

    return(<div>
        <div id='login-form'className='login-page'>
            <div className="form-box">
                <div className='button-box'>
                   <p>ADMIN</p>
                </div>
                <form id='login' className='input-group-login' onSubmit={log}>
                    <input type='text'className='input-field' value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                    }
                    } placeholder='Email Id' required />
		            <input type='password'className='input-field'value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                    }
                    } placeholder='Enter Password' required/>
		            <button type='submit'className='submit-btn' >Log in</button>
		         </form>
                 <span>{inkorrect ? <div className='incorrect'><p>Incorrect email/password</p></div>:'' }</span>
            </div>
            
        </div>

    </div>)

}

export default Login