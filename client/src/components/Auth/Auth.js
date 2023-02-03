import React from 'react'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { userActions } from '../../store';
import AuthForm from './AuthForm'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();
const onResReceived = (data) => {
  console.log('2',data);
  dispatch(userActions.login());
  localStorage.setItem("userId", data.id);
  navigate("/");
  // console.log('user', localStorage.getItem("userId"))

};
const getData = (data) => {
  console.log(data);
sendUserAuthRequest(data.inputs, data.signup)
 .then(onResReceived)
  .catch((err) => console.log(err));
};

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};


export default Auth;



