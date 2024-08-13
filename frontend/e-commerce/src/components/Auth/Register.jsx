import React, { useState } from 'react'
import { message } from "antd"
import { useNavigate } from 'react-router-dom';
const Register = () => {

   const navigate = useNavigate()
   const [form, setForm] = useState({
      username: "",
      email: "",
      password: ""
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm({
         ...form,
         [name]: value,
      })
   }

   const handleRegister = async (e) => {
      e.preventDefault()
      try {
         const response = await fetch(`http://localhost:5000/api/auth/register`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
         });
         if (response.ok) {
            const data = await response.json();
            //jwt token kullanılmalı
            localStorage.setItem("user", JSON.stringify(data));
            message.success("Kayıt Başarılı")
            navigate("/")
         } else {
            message.error("Kayıt başarısız")
         }
         console.log(response)
      } catch (error) {
         console.log("giriş hatası", error)
      }
   }

   return (
      <div className="account-column">
         <h2>Register</h2>
         <form onSubmit={handleRegister}>
            <div>
               <label>
                  <span>Username <span className="required">*</span></span>
                  <input type="text" onChange={handleInputChange} name='username' />
               </label>
            </div>
            <div>
               <label>
                  <span>Email address <span className="required">*</span></span>
                  <input type="email" onChange={handleInputChange} name='email' />
               </label>
            </div>
            <div>
               <label>
                  <span>Password <span className="required">*</span></span>
                  <input type="password" onChange={handleInputChange} name='password' />
               </label>
            </div>
            <div className="privacy-policy-text remember">
               <p>
                  Your personal data will be used to support your experience throughout this website, to
                  manage access to your account, and for other purposes described in our <a
                     href="#">privacy policy.</a>
               </p>
               <button className="btn btn-sm">Register</button>
            </div>

         </form>
      </div>
   )
}

export default Register
