import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth , googleProvider} from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlegoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/")
    }
    catch(err) {
      console.error("Google sign in error:", err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div style={formContainer}>
      <div style={formWrapper}>
        <span style={logo}>Heavan Chat</span>
        <span style={title}>Login</span>
        <form style={form} onSubmit={handleSubmit}>
          <input type="email" style={input} onChange={e => setEmail(e.target.value)} placeholder="email" />
          <input type="password" style={input} onChange={e => setPassword(e.target.value)} placeholder="password" />
          <button style={button}>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p style={paragraph}>You don't have an account? <Link to="/register">Register</Link></p>
        <button onClick={handlegoogle}><img width="24" height="24" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" /> </button>
      </div>
    </div>
  );
  };

export default Login;





//Styles
const formContainer = {
  backgroundColor: 'light blue',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const formWrapper = {
  backgroundcolor : 'lightblue',
  padding: '20px 60px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
};

const logo = {
  color: 'rgb(137 134 213)',
  fontWeight: 'bold',
  fontSize: '24px',
};

const title = {
  color: '#5d5b8d',
  fontSize: '12px',
};

const form = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const input = {
  padding: '15px',
  border: 'none',
  width: '250px',
  borderBottom: '1px solid #a7bcff',
};

const button = {
  backgroundColor: 'rgb(171 175 218)',
  
  color: 'white',
  padding: '10px',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
};


const paragraph = {
  color: '#5d5b8d',
  fontSize: '12px',
  marginTop: '10px',
};