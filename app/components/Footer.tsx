import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-lightBlack text-white py-6">
      <div className="container mx-auto text-center">
       
        <p className="text-sm">&copy; {new Date().getFullYear()} MILO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
