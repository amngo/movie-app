import { loginUser } from 'api/services/User';
import { useState } from 'react';

interface Props {
  handleToggle: (boolean) => void;
}

const Login: React.FC<Props> = ({ handleToggle }): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (email: string, password: string) => {
    setEmail('');
    setPassword('');
    loginUser(email, password);
  };

  return (
    <div className="p-2 lg:w-[300px] bg-neutral-900">
      <div className="flex flex-col p-4 bg-neutral-800">
        <form className="h-full">
          <div className="mb-1">
            <input
              value={email}
              spellCheck="false"
              type="email"
              className="w-full px-4 text-sm border-0 border-transparent rounded-md focus:border-transparent focus:ring-0 bg-neutral-900"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <input
              value={password}
              spellCheck="false"
              type="password"
              className="w-full px-4 text-sm border-0 border-transparent rounded-md focus:border-transparent focus:ring-0 bg-neutral-900"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email, password);
              }}
              className="px-2 py-1 text-sm rounded-sm bg-sky-500 text-neutral-900"
            >
              Submit
            </button>
            <button
              className="px-2 py-1 text-xs font-bold"
              onClick={(e) => {
                e.preventDefault();
                handleToggle(false);
              }}
            >
              Register an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
