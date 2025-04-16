import LayoutContainer from "../../components/LayoutContainer";

const AboutUs: React.FC = () => {
  return (
    <div>
      <LayoutContainer>
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          We are a company dedicated to providing the best service and products
          to our customers. Our team is committed to excellence and innovation.
        </p>
        <p>
          Our mission is to deliver quality products and exceptional customer
          service. We believe in building long-lasting relationships with our
          clients and partners.
        </p>
        <p className="mt-4">
          Thank you for visiting our page. We look forward to serving you!
        </p>
      </LayoutContainer>
    </div>
  );
};

export default AboutUs;
