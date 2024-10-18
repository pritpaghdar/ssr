import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us through our contact page." />
      </Helmet>
      <h1>Contact Us</h1>
      <p>This is the Contact page content.</p>
    </>
  );
};

export default Contact;
