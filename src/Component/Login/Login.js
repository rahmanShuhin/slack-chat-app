import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../../Reducer";
const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5612AQGstnV-WrOdZQ/article-cover_image-shrink_600_2000/0?e=1600905600&v=beta&t=9ir9hcfU80DhTZSD2ncuUU72oJebxoIZb3vlQrMXjf0"
          alt="logo"
        />
        <h2>Sign In To Slack.Shuhin</h2>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
