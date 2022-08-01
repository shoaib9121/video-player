import { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoListing from "../../components/VideoListing";
import { Container } from "./styled";

const Home = (): JSX.Element => {
  return (
    <Container>
      <header>
        <Link to="/">Home</Link>
      </header>
      <VideoListing />
    </Container>
  );
};

export default Home;
