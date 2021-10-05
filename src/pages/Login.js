import "./Login.scss";
import backgroundKiri from "../assets/image/login-background-kiri.png";
import backgroundKanan from "../assets/image/login-background-kanan.png";
import { Form } from "react-bootstrap";
import post from "../api/post";
import { useState } from "react";
import { useAuth } from "../config/Auth";
import { Redirect } from "react-router";

const Login = () => {

  const [Password, setPassword] = useState("");
  const {setAuthTokens} = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin= async(e) =>{
    e.preventDefault()
    await post.post("/passwordyt",{
        password:Password
    }).then((res) => {
          // res.status === 200 && setAuthTokens(res.data.data.jwtoken)
          if(res.data.status != false){
            setLoggedIn(true)
          }
          console.log(res);
    }).catch(err => {
          console.log(err);
    })
  }

  if(isLoggedIn){
    return <Redirect to={"/"} />
  }

  return (
    <div className="login">
      <div className="content">
        <div className="background">
          <img className="background-kiri" src={backgroundKiri} alt="background kiri" />
          <img className="background-kanan" src={backgroundKanan} alt="background kanan" />
        </div>
        
        <div className="container">
          <form onSubmit={handleLogin}>
            <h6>Password</h6>
            <Form.Control type="password" placeholder="Masukkan Password" />
            <button
              className="button-login"
              type="submit"
              // onClick={(e) => handleShow(posterFilm.judul)}
            >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Login;