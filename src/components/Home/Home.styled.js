import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  background-color: #dde0fd;
  box-shadow: 0px 0px 6px #7a80b7;
  padding: 20px;
  color: #fff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #471ca9;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #471ca9;
  margin: 50px;
`;

export const StyledLink = styled(Link)`
  color: #929ae0;
  font-family: "Oleo Script", cursive;
  font-size: 30px;
  text-decoration: none;
  &:hover {
    color: #723fb5;
  }
`;
