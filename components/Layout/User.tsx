import { supabase } from 'api/auth';
import { AppCtx } from 'context';
import { NextRouter, useRouter } from 'next/router';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

interface Props {
  handleToggle: () => void;
}

const User: React.FC<Props> = ({ handleToggle }): JSX.Element => {
  const { setUserData, userData } = useContext(AppCtx);
  const router: NextRouter = useRouter();

  if (userData.session)
    return (
      <button
        className='px-3 py-1 text-xs rounded-sm bg-sky-500 text-neutral-900'
        onClick={() => {
          supabase.auth.signOut();
          setUserData({ watchlist: [], favorites: [], session: null });
          toast.success('You have signed out.');
          router.push('/');
        }}
      >
        Logout
      </button>
    );

  return (
    <button
      className='px-3 py-1 text-xs rounded-sm bg-sky-500 text-neutral-900'
      onClick={handleToggle}
    >
      Login
    </button>
  );
};

export default User;
