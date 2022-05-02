import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidator, setPasswordValidator] = useState("");
  const [emailValidator, setEmailValidator] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailValidatorEvent = () => {
    setEmailValidator(email.includes("@"));
  };

  return (
    <Card className={classes.login}>
      <form>
        <div
          className={`${classes.control} ${
            emailValidator == false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailValidatorEvent}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordValidator}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
