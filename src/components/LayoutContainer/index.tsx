import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-[1024px] mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
