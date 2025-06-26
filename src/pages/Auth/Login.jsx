import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginPresentation from "./LoginPresentation";
import { login } from "../../Redux/Slices/AuthSlice";

function Login(){

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [loginData,setLoginData]=useState({
        email:'',
        password:''
    })

    function handleUserInput(e){
            const {name,value}=e.target;
            setLoginData({
                ...loginData,
                [name]:value
            })
        }
    
        async function handleFormSubmit(e){
            e.preventDefault();
            console.log(loginData)
    
            if( !loginData.email || !loginData.password){
                toast.error('Missing values from the form');
                return;
            }
    
            
    
            if(!loginData.email.includes('@') || !loginData.email.includes('.')){
                toast.error("Invalid Email address")
                return;
            }
    
            const apiResponse=await dispatch(login(loginData));
            if(apiResponse.payload.data.success){
                navigate('/');
            }
            
            
    
        }
    
        return(
        <LoginPresentation
            handleFormSubmit={handleFormSubmit}
            handleUserInput={handleUserInput}
        />
    );

}

export default Login;