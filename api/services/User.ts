import { supabase } from 'api/auth';
import Router, { NextRouter } from 'next/router';
import toast from 'react-hot-toast';

export const loginUser = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    else Router.push('/');
  } catch (error) {
    toast.error(error.error_description || error.message);
  }
};

export const registerUser = async (
  email: string,
  password: string,
  router: NextRouter
): Promise<void> => {
  try {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    router.push('/login');
  } catch (error) {
    toast.error(error.error_description || error.message);
  }
};
