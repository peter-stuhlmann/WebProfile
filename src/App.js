import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import IconButton from '@material-ui/core/IconButton';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

import LatoBold from './assets/fonts/lato/lato-bold.ttf';
import LatoLight from './assets/fonts/lato/lato-light.ttf';

export default function App() {
  const links = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/peter-stuhlmann',
      icon: <LinkedInIcon />,
    },
    {
      title: 'Github',
      href: 'https://github.com/peter-stuhlmann',
      icon: <GitHubIcon />,
    },
    {
      title: 'E-Mail',
      href: 'mailto:info@peter-stuhlmann.de',
      icon: <EmailIcon />,
    },
    {
      title: 'Location',
      href: 'https://goo.gl/maps/b7RBhchqKkBTriKb9',
      icon: <RoomIcon />,
    },
  ];

  const footerLinks = [
    {
      title: 'Legal Notice',
      href: 'https://peter-stuhlmann-webentwicklung.de/impressum',
    },
  ];

  return (
    <Fragment>
      <GlobalStyles />
      <Card>
        <Header>
          <h1>Peter R. Stuhlmann</h1>
          <h2>Frontend Web Developer</h2>
        </Header>
        <NavList>
          {links.map((link) => (
            <ListItem key={link.title}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <IconButton aria-label={link.title}>{link.icon} </IconButton>
              </a>
            </ListItem>
          ))}
        </NavList>
      </Card>
      <Footer>
        {footerLinks.map((link) => (
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        ))}
      </Footer>
    </Fragment>
  );
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Lato;
    src: url(${LatoBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: Lato;
    src: url(${LatoLight}) format('truetype');
    font-weight: 300;
  }
    
  body {
    background-color: #313440;
    font-family: Lato, sans-serif;
    margin: 0;
    position: fixed;
    width: 100%;
    height: 100%;  
  }
`;

const Card = styled.div`
  background-color: gold;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 100%;
  z-index: 2;
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19),
    moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045),
    moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1);
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @keyframes init {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 10px;
      height: 10px;
      margin-top: 0;
      opacity: 1;
    }
  }

  @keyframes moveDown {
    0% {
      top: 50%;
    }
    50% {
      top: 40%;
    }
    100% {
      top: 100%;
    }
  }

  @keyframes moveUp {
    0% {
      top: 100%;
    }
    50% {
      top: 40%;
    }
    100% {
      top: 50%;
    }
  }

  @keyframes materia {
    0% {
      background-color: #ffd700;
    }
    50% {
      border-radius: 4px;
    }
    100% {
      width: 405px;
      height: 370px;
      border-radius: 2px;
    }
  }

  @media (max-width: 1000px) {
    @keyframes materia {
      0% {
        background-color: #313440;
      }
      50% {
        border-radius: 4px;
      }
      100% {
        width: 330px;
        height: 310px;
        border-radius: 2px;
      }
    }
  }

  @media (max-width: 768px) {
    @keyframes materia {
      0% {
        background-color: #313440;
      }
      50% {
        border-radius: 4px;
      }
      100% {
        width: 240px;
        height: 220px;
        border-radius: 2px;
      }
    }
  }
`;

const Header = styled.header`
  color: #313440;
  opacity: 0;
  margin: 0;
  padding: 0;
  animation: moveIn 1s 3.1s ease forwards;
  line-height: 1;
  padding: 55px 20px;

  @media (max-width: 1000px) {
    padding: 45px 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  h1 {
    font-size: 3.6em;
    font-weight: 700;
    margin: 0 0 10px 0;
    text-transform: uppercase;

    @media (max-width: 1000px) {
      font-size: 2.9em;
      margin: 0 0 7px 0;
    }

    @media (max-width: 768px) {
      font-size: 2em;
      margin: 0 0 5px 0;
    }
  }

  h2 {
    margin: 0;
    font-size: 1.64em;
    font-weight: 300;
    text-transform: uppercase;

    @media (max-width: 1000px) {
      font-size: 1.32em;
    }

    @media (max-width: 768px) {
      font-size: 0.91em;
    }
  }

  @keyframes moveIn {
    0% {
      margin-top: 10px;
      opacity: 0;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-sizing: border-box;
  margin: 0;
  padding: 5% 7%;
  height: 65px;

  @media (max-width: 1000px) {
    height: 55px;
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  box-sizing: border-box;
  list-style: none;

  &:hover svg {
    transform: scale(1.1);
  }

  svg {
    fill: #313440;
    width: 40px;
    height: auto;
    transition: 0.1s;

    @media (max-width: 1000px) {
      width: 30px;
    }

    @media (max-width: 768px) {
      width: 25px;
    }
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 10px;

  &:hover a {
    color: #fff;
  }

  a {
    color: #c5c5c5;
    text-decoration: none;
    transition: 0.1s;
    font-size: 14px;
  }
`;
