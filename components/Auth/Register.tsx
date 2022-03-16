import { ChevronLeftIcon } from '@heroicons/react/outline';
import { registerUser } from 'api/services/User';
import { AppCtx } from 'context';
import { NextRouter, useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Props {
  handleToggle: (boolean) => void;
}

const Register: React.FC<Props> = ({ handleToggle }): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const router: NextRouter = useRouter();

  const { session } = useContext(AppCtx);

  useEffect(() => {
    if (session) router.push('/');
  }, [session, router]);

  const handleRegister = async (
    email: string,
    password: string,
    confirm: string,
  ) => {
    if (password.localeCompare(confirm) !== 0) {
      toast.error('Passwords do not match.');
    } else {
      registerUser(email, password, router);
    }
  };

  return (
    <div className="p-2 lg:w-[300px] bg-neutral-900">
      <div className="flex flex-col p-4 bg-neutral-800">
        <button
          className="flex items-center px-2 mb-2"
          onClick={() => handleToggle(true)}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <div className="text-sm">Back</div>
        </button>
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

          <div className="mb-1">
            <input
              value={password}
              spellCheck="false"
              type="password"
              className="w-full px-4 text-sm border-0 border-transparent rounded-md focus:border-transparent focus:ring-0 bg-neutral-900"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <input
              value={confirm}
              spellCheck="false"
              type="password"
              className="w-full px-4 text-sm border-0 border-transparent rounded-md focus:border-transparent focus:ring-0 bg-neutral-900"
              placeholder="Confirm password"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleRegister(email, password, confirm);
            }}
            className="px-2 py-1 text-sm rounded-sm bg-sky-500 text-neutral-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
