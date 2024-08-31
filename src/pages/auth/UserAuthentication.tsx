import SignUpForm from "../../components/UserAuthentication/SignUpForm";
import LoginForm from "../../components/UserAuthentication/LoginForm";
import { useState } from "react";


const UserAuthentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleRedirectToSignUp = () => {
    setIsLogin(false);
  }

  const handleRedirectToLogin = () => {
    setIsLogin(true);
  }

  return (
    <>
      {isLogin ? (
        <LoginForm redirect={handleRedirectToSignUp} />
      ) : (
        <SignUpForm redirect={handleRedirectToLogin} />
      )}
    </>
  )
}

export default UserAuthentication;