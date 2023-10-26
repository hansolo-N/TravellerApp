import styles from "./Login.module.css";
import { useState } from "react";
import NavPage from "../components/NavPage"
import supabase from "../client/SupaClient"


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [Name, setName] = useState("");

    async function handleSubmit(e){

        e.preventDefault()
        if(Name ===""){
            alert("please enter your name")
            return
        }
        if(password !== confirm){
            alert("the password you entered does not match")
            setPassword("")
            setConfirm("")
            return
        }
        try {
            const { data, error } = await supabase.auth.signUp(
                {
                  email: email,
                  password: password,
                  options: {
                    data: {
                      first_name: Name,
                      age: 27,
                    }
                  }
                }
              )
              alert("check your email for verification link!")
        } catch (error) {
            alert(error)
        }

    }

    return (
        <main className={styles.login}>
          <NavPage/>
          <form className={styles.form}>


          <div className={styles.row}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={Name}
              />
            </div>

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

            <div className={styles.row}>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="Confirm"
                onChange={(e) => setConfirm(e.target.value)}
                value={confirm}
              />
            </div>
    
            <div>
              <button onClick={(e)=>handleSubmit(e)}>Sign Up</button>
            </div>
          </form>
        </main>
      );
}
