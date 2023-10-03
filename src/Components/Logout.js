import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Logout() {

    const navigate = useNavigate();

    const logout = async(e) => {
      
        try{
            const res =  axios.get(`${process.env.REACT_APP_CONNECTION_URI}/logout`, {
          headers: {
            Access : "application/json",
            'Content-Type': 'application/json'
          },
          Credential : "include"
        });
        
          if(res.status === 401 || !res ){
            console.error("Please Logout Letter");
            window.localStorage.removeItem('jwt');
            Cookies.remove('jwt');
          }
          else{
            navigate('/')
          }
        }
        catch(error) {
        // dispatch(setError("Invalid Credentials"));
        console.error(error)
        };      
      };

      useEffect(() => {
        logout();
      },[]);
  return (
    <div>
      
    </div>
  )
}
