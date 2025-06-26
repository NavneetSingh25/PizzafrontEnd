import { useState } from 'react';
import toast from 'react-hot-toast';
import SignUpPresentation from './SignUpPresentation';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';

function Signup(){

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [SignUpState,setSignUpState]=useState({
        firstName:'',
        email:'',
        mobileNumber:'',
        password:''
    });

    function handleUserInput(e){
        const {name,value}=e.target;
        setSignUpState({
            ...SignUpState,
            [name]:value
        })
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        console.log(SignUpState)

        if(!SignUpState.firstName || !SignUpState.email || !SignUpState.mobileNumber || !SignUpState.password){
            toast.error('Missing values from the form');
            return;
        }

        if(SignUpState.firstName.length<5 || SignUpState.firstName.length>20){
            toast.error("First Name should be atleast 5 characters long and maximum 20 characters")
            return;
        }

        if(!SignUpState.email.includes('@') || !SignUpState.email.includes('.')){
            toast.error("Invalid Email address")
            return;
        }

        if(SignUpState.mobileNumber.length<10 || SignUpState.firstName.length>12){
            toast.error("Mobile Number should be between 10-12 characters")
            return;
        }

        const apiResponse=await dispatch(createAccount(SignUpState));
        if(apiResponse.payload.data.success){
            navigate('/auth/login');
        }
        

    }

    return(
        <SignUpPresentation
            handleFormSubmit={handleFormSubmit}
            handleUserInput={handleUserInput}
        />
    );

}

export default Signup;