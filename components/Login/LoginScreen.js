import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import '../../assets/css/login.css'
import axios from "axios";
import { Link } from "react-router-dom";

const LOGIN_URL = "/auth";

const LoginScreen = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="login-container">
      {success ? (
        <section className="login-section">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link className="linkMain" to="/">
               Go to Home 
            </Link>
          </p>
        </section>
      ) : (
        <section className="login-section">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label" htmlFor="username">
              Username:
            </label>
            <input
              className="login-input"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label className="login-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="login-button">Sign In</button>
          </form>
          <div className="login-options">
            <p>
              Need an Account?
              <br />
              <span className="line">
                <Link className="linkMain" to="/register-user">
                  Sign Up
                </Link>
              </span>
            </p>

            <p>
              Forget Password?
              <br />
              <span className="line">
                <Link className="linkMain" to="/reset-pw">
                  Reset Password
                </Link>
              </span>
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default LoginScreen;
