import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer, SocialItem, SocialList, SocialIcon, Copyright } from './styles';


export default function Footer() {
    const getYear = () => {
        return new Date().getFullYear();
    }

  return (
    <FooterContainer>
      <SocialList>
        <SocialItem>
          <SocialIcon
            href="https://github.com/sakikout"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <FaGithub size={25} />
          </SocialIcon>
        </SocialItem>
        <SocialItem>
          <SocialIcon
            href="https://www.linkedin.com/in/beatriz-evelyn-dalfior-994b04209/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={25} />
          </SocialIcon>
        </SocialItem>
      </SocialList>
      <Copyright>
       Copyright ©{getYear()}
      </Copyright>
    </FooterContainer>
  );
}
