import React from "react";
import SidebarRight from "./components/molecules/Sidebar/SidebarRight"; 
import SocialLink from "./components/atoms/SocialLink"; 
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Page = () => {
  const sidebarLinks = [
    { url: "https://github.com", icon: FaGithub },
    { url: "https://instagram.com", icon: FaInstagram },
  ];

  const linkStyles = {
    color: "black", 
  };

  return (
    <div>
      <SidebarRight links={sidebarLinks} />
      <div>
        {sidebarLinks.map((link, index) => (
          <SocialLink key={index} url={link.url} icon={link.icon} />
        ))}
      </div>
    </div>
  );
};

export default Page;