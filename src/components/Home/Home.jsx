import { Header, StyledLink, Title } from "./Home.styled";

export const Home = () => {
  return (
    <>
      <Header>Home</Header>
      <Title>
        See our best <StyledLink to="tweets">Tweets</StyledLink>
      </Title>
    </>
  );
};
