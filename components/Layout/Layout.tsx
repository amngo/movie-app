import { supabase } from 'api/auth';
import { getWatchlist } from 'api/services/Watchlist';
import { AppCtx } from 'context';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }): JSX.Element => {
  const { setUserData } = useContext(AppCtx);

  useEffect(() => {
    const session = supabase.auth.session();
    const getData = async (session) => {
      const watchlist = await getWatchlist();
      setUserData({ watchlist, session });
    };

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) getData(session);
    });

    if (session) getData(session);
  }, [setUserData]);

  return (
    <div className="flex flex-col justify-between h-full">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container flex w-full h-full min-w-0 mx-auto mb-12">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
