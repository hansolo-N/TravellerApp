import styles from "./Login.module.css";
import { useState } from "react";
import NavPage from "../components/NavPage"
import { Link } from "react-router-dom";
import supabase from "../client/SupaClient"


export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("qwerty");

  async function handleSubmit(e){

    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword(
            {
              email: email,
              password: password,
            })
        if(error) throw error
        console.log(data)
        alert("successfully logged in")
    } catch (error) {
       
        alert(error)
    }

}


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
          <button onClick={handleSubmit}>Login</button>
          <Link to={'/signup'}><p className={styles['signup-link']}>Dont have an account yet?</p></Link>
        </div>
      </form>
    </main>
  );
}
