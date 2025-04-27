import LayoutContainer from "../../components/LayoutContainer";
import HouseRules from "../home/houseRules";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const go = useNavigate();

  return (
    <LayoutContainer>
      <div className="bg-blue-500 w-full pb-4">
        <div className="max-w-[1024px] mx-auto px-4 font-mono py-20 text-white">
          <div className="text-center max-w-[600px] mx-auto">
            <div className="text-xl pb-6">Real Bread since 1979</div>
            <div className="text-6xl font-bold pb-10 sm:text-7xl">
              Melbourne's Oldest Traditional Sourdough Bakery
            </div>
            <button
              className="font-bold text-xl bg-slate-50 text-blue-500 px-6 py-3 rounded-lg hover:text-white hover:bg-blue-500 hover:border-2 transition duration-300"
              onClick={() => go("/products")}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="bg-green-100 w-full pb-6">
        <div className="max-w-[1024px] mx-auto px-4 font-mono py-16">
          <div className="text-center text-6xl font-bold pb-14">
            <span className="inline-block pb-1 text-red-500">Our Story</span>
          </div>
          <div>
            {/* create a modal for img later */}
            <img
              src="./images/our_story_comic.png"
              alt="about us comic"
              // className="mx-auto cursor-zoom-in transition hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
      <HouseRules />
    </LayoutContainer>
  );
};

export default Home;
