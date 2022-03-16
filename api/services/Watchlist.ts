import { User } from '@supabase/supabase-js';
import { supabase } from 'api/auth';
import toast from 'react-hot-toast';

export const addToWatchlist = async (id: number, status: string) => {
  try {
    const user: User = supabase.auth.user();

    const insert = {
      user_id: user.id,
      movie_id: id,
      status,
    };

    let { error } = await supabase.from('watchlist').upsert(insert, {
      returning: 'minimal',
    });

    if (error) {
      throw error;
    } else {
      toast.success('Added to your watchlist.');
    }
  } catch (error) {
    toast.error('Oops. Something went wrong.');
  }
};

export const getWatchlist = async () => {
  try {
    const user: User = supabase.auth.user();

    let { data, error } = await supabase
      .from('watchlist')
      .select()
      .eq('user_id', user.id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    toast.error('Oops. Something went wrong.');
    return [];
  }
};

export const removeFromWatchlist = async (id: number) => {
  try {
    const user: User = supabase.auth.user();
    let { error } = await supabase
      .from('watchlist')
      .delete()
      .match({ movie_id: id, user_id: user.id });

    if (error) {
      throw error;
    } else {
      toast.success('Removed from your watchlist.');
    }
  } catch (error) {
    toast.error('Oops. Something went wrong.');
    return [];
  }
};

export const updateWatchlist = async (id: number, status: string) => {
  try {
    const user: User = supabase.auth.user();
    let { error } = await supabase
      .from('watchlist')
      .update({ status })
      .match({ movie_id: id, user_id: user.id });

    if (error) {
      throw error;
    } else {
      toast.success('Updated from your watchlist.');
    }
  } catch (error) {
    toast.error('Oops. Something went wrong.');
    return [];
  }
};
