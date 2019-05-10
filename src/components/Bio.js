import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import svgAvatarJpg from "../../static/images/avatar.jpeg";
import svgTwitter from "../svg/socials/github.svg";
import svgResume from "../svg/socials/resume.svg";
import svgEmail from "../svg/socials/email.svg";

const BioWrapper = styled.div`
  position: sticky;
  top: 2em;
  width: ${props => props.theme.sizes.bioWidth};
  padding: 1.5em;
  font-size: 15.5px;
  background: ${props => props.theme.colors.blackLight};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    position: relative;
    margin: 2em 0;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1.3em 1em;
  }
`;

const AvatarImage = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const BioHeader = styled.div`
  display: flex;
  align-items: center;
`;
const BioName = styled.div`
  margin-left: 10px;
  a {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.3em;
    color: #fff;
  }
`;
const BioMain = styled.div`
  margin-top: 1em;
`;
const BioText = styled.p`
  color: #fff;
  font-size: 0.92em;
`;
const BioLinks = styled.div`
  margin-top: 1.5em;
  display: flex;
  color: #fff;
  text-align: center;
  max-width: 244px;
  img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 33px;
  }
`;

const BioLink = styled.a`
  width: 33.3%;
  display: block;
  font-weight: 700;
  font-size: 0.9em;
  line-height: 30px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.5px;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`;

const Bio = () => {
    return (
      <BioWrapper>
        <BioHeader>
          <AvatarImage src={svgAvatarJpg} />
          <BioName>
            <a href=''>Rosso</a>
          </BioName>
        </BioHeader>
        <BioMain>
          <BioText>
            {/* 资深增删改查工程师，精通面向boilerplate编程，面向Google编程，面向stackoverflow编程等多种编程范式。 */}
            每天都会学习的程序员。
          </BioText>
          <BioLinks>
            <BioLink href="/about/">
              <img src={svgResume} alt="RESUME" />
              <div>关于我</div>
            </BioLink>
            <BioLink
              className="bio-link--email"
              href="mailto:heizai3@gmail.com"
            >
              <img src={svgEmail} alt="" />
              <div>邮箱</div>
            </BioLink>
            <BioLink href="https://github.com/nuty">
              <img style={{color: "#FFF"}} src={svgTwitter} alt="Github" />
              <div>Github</div>
            </BioLink>
          </BioLinks>
        </BioMain>
      </BioWrapper>
    );
}

export default Bio;
