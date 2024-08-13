import React, { useState } from 'react'
import { message } from "antd"
import { useNavigate } from 'react-router-dom';
const Login = () => {
   const navigate = useNavigate()
   const [form, setForm] = useState({
      email: "",
      password: ""
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setForm({ ...form, [name]: value })
   }
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
         });
         if (response.ok) {
            const data = await response.json();

            localStorage.setItem("user", JSON.stringify(data));
            if (data.role === "admin") {
               window.location.href = "/admin"
            }
            else { navigate("/") }
            message.success("login Başarılı")

         } else {
            message.error("giriş başarısız")
         }
         console.log(response)
      } catch (error) {
         console.log("giriş hatası", error)
      }
   }
   return (
      <div className="account-column">
         <h2>Login</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label>
                  <span>Username or email address <span className="required">*</span></span>
                  <input type="text" onChange={handleInputChange} name='email' />
               </label>
            </div>
            <div>
               <label>
                  <span>Password <span className="required">*</span></span>
                  <input type="password" onChange={handleInputChange} name='password' />
               </label>
            </div>
            <p className="remember">
               <label>
                  <input type="checkbox" />
                  <span>Remember me</span>
               </label>
               <button className="btn btn-sm">Login</button>
            </p>
            <a href="#" className="form-link">Lost your password?</a>
         </form>
      </div>
   )
}

export default Login
