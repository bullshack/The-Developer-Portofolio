import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaStackOverflow,
  FaSteamSymbol,
  FaGooglePlusG
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

class Social extends React.Component {
  render() {
    const fillColor = this.props.isFull ? "#23B4A5" : "#73737d";
    const sizeUp = this.props.isFull ? "23px" : "21px";
    const mbUp = this.props.isFull ? "mb-5 " : "mb-4";

    return (
      <SocialBar>
        <a
          href="https://github.com/zephyr007"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://www.linkedin.com/in/nitindhemiwal/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://steamcommunity.com/id/dhemiwalnitin/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Steam size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://twitter.com/Dhemiwalnitin "
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="mailto:dhemiwal.nitin@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Google size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://leetcode.com/nitindhemiwal/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LeetCode size={sizeUp} className={mbUp} color={fillColor} />
        </a>
      </SocialBar>
    );
  }
}

export default Social;

const SocialBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 2.55rem;
  bottom: 11rem;

  @media (max-width: 992px) {
    left: 1.5rem;
  }

  @media (max-width: 580px) {
    flex-direction: row;
    justify-content: center;
    position: unset;
  }
`;

const Github = styled(FaGithub)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Linkedin = styled(FaLinkedinIn)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Twitter = styled(FaTwitter)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Stackoverflow = styled(FaStackOverflow)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Steam = styled(FaSteamSymbol)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Google = styled(FaGooglePlusG)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const LeetCode = styled(SiLeetcode)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
