import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth: React.FC = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleToggle = (bool: boolean) => {
    setToggle(bool);
  };

  if (toggle) return <Login handleToggle={handleToggle} />;

  return <Register handleToggle={handleToggle} />;
};

export default Auth;
