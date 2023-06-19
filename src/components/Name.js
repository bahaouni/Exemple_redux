import React from 'react';
import { useSelector } from 'react-redux';

const Name = () => {
  const auth = useSelector(state => state.auth)
  const Login = auth.Login
  return (
    <a href="name" className="nav-link active" aria-current="page" style={{ display: !Login ? 'block' : 'none' }}>
      test nom
    </a>
  );
};

export default Name;
