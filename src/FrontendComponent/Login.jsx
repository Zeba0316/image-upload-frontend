// import axios from "axios";
// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     try {
//       const response = await axios.post("http://localhost:3001/login", {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         // Navigate to the upload page upon successful login
//         navigate("/upload");
//         alert("Login successful");
//       } else {
//         setError(result.message);
//         console.log(result.message);
//         // Show error message if login fails
//       }
//     } catch (error) {
//       setError("An error occurred during login");
//     }
//   };

//   return (
//     <>
//       <div>
//         <Card className="w-60 h-60">
//           <CardHeader>
//             <CardTitle>Login</CardTitle>
//             <CardDescription>Card Description</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p>Card Content</p>
//           </CardContent>
//           <CardFooter>
//             <p>Card Footer</p>
//           </CardFooter>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default Login;


import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (response.ok) {
      // router.push('/dashboard')
    } else {
      setError(data.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-6 bg-white rounded shadow-md w-96">
        <h1 className="mb-4 text-2xl font-bold">Login</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="em">Email</Label>
            <Input
              id="em"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  )
}