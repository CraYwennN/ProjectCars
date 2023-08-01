import Navbar from "./Navbar";
import { Link } from "react-router-dom";



    const Login = () => {
        return (
          <div className="login">
            
            <div className="login-form">
              <Link to ={"/"} className="login-h1"><h1 >Porsche</h1></Link>
              <h2 className="login-h2">Nice to see you</h2>
              <form>
                <div className="login-Username">
                  <label htmlFor="PorscheID">Porsche ID(Email Adress)</label><br/>
                  <input className="login-input" type="text" id="PorscheID" name="PorscheID" />
                </div>
                <div className="login-Username">
                  <label htmlFor="password">Password:</label><br/>
                  <input className="login-input" type="password" id="password" name="password" />
                </div>
                <div>
                  <button className="login-button" type="submit">Login in now</button>
                </div>
              </form>
              <p className="or-login">or</p>
              <p>
                
              ,<Link className="register-text" to="/register">Register now </Link>to discover the digital world of Porsche.
              </p>
            </div>
          </div>
        );
      };
      
      export default Login;
