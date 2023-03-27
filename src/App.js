// import React, { useState } from 'react';
// import './App.css';

// function LoginForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission logic here
//     };

//     return (
//         <form className="login-form" onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <label htmlFor="email">Email</label>
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={handleEmailChange}
//             />
//             <label htmlFor="password">Password</label>
//             <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default LoginForm;
