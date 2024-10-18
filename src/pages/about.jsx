import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and our mission." />
      </Helmet>
      <h1>About Us</h1>
      <p>This is the About page content.</p>
    </>
  );
};

export default About;
