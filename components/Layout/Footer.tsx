import React from 'react';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="w-full bg-neutral-900 h-[80px] flex flex-col justify-center items-center text-xs text-neutral-600">
      <p>Made with Next.js by Andy Ngo</p>
      <p className="cursor-pointer">Source code on Github</p>
    </footer>
  );
};

export default Footer;
