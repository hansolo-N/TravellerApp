import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import NavPage from "../components/NavPage"
import { Link, useNavigate } from "react-router-dom";
import supabase from "../client/SupaClient"
import { useAuth } from "../contexts/AuthenticationContext";
import Button from "../components/Button";


export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("qwerty");


  const {login,isAuthenticated} = useAuth()
  const navigate = useNavigate()



  async function handleSubmit(e){

    e.preventDefault()


      

    try {
        const { data, error } = await supabase.auth.signInWithPassword(
            {
              email: email,
              password: password,
            })
        if(error) throw error
        login(data)
    } catch (error) {
       
        alert(error)
    }

}

// async function handleSubmit(e){

//   e.preventDefault()


// }

useEffect(function(){
  if(isAuthenticated==='authenticated') {
    navigate("/app")
  }

},[isAuthenticated])

  return (
    <main className={styles.login}>
      <NavPage/>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className={styles.signup}>
          <Button onClick={handleSubmit} type="primary">Login</Button>
          <Link to={'/signup'}><p className={styles['signup-link']}>Dont have an account yet?</p></Link>
        </div>
      </form>
    </main>
  );
}
