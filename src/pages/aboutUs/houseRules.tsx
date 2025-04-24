const HouseRules: React.FC = () => {
  return (
    <div className="text-center font-mono max-w-[1024px] mx-auto px-10 pt-20 pb-28">
      <div className="text-lg pt-10 grid grid-cols-2 gap-x-12 font-bold">
        <div className="flex justify-start">
          <p>100% Handmade</p>
        </div>
        <div className="flex justify-end">
          <p>100% Freshly Baked</p>
        </div>
      </div>
      <div className="text-6xl pb-14 pt-14">
        <span className="font-bold inline-block pb-1 text-black">
          House Rules
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-20 justify-center items-center pt-14 pb-20">
        <div className="flex flex-col items-center">
          <img
            src="../images/houseRules/handmade.png"
            alt="3 ingridents"
            className="h-32 w-32"
          />
          <div className="pt-6">
            <h2 className="text-lg font-bold pb-6">3 Ingridents</h2>
            <p className="text-sm">
              Our handmade, traditional sourdough made with
              <span className="bg-pink-200 font-semibold px-2 py-0.5 rounded-lg">
                Flour, Salt and Water
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../images/houseRules/oven.png"
            alt="bread-oven"
            className="h-32 w-32"
          />
          <div className="pt-6">
            <h2 className="text-lg font-bold pb-6">Traditional Methods</h2>
            <p className="text-sm">
              <span className="bg-pink-200 font-semibold px-2 py-0.5 rounded-lg">
                Original techniquesspan
              </span>
              drawn from
              <span className="bg-pink-200 font-semibold px-2 py-0.5 rounded-lg">
                45 year
              </span>
              heritage
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../images/houseRules/flour.png"
            alt="flour"
            className="h-32 w-32"
          />
          <div className="pt-6">
            <h2 className="text-lg font-bold pb-6">Support Local</h2>
            <p className="text-sm">
              High quality, sustainably produced flours from
              <span className="bg-pink-200 font-semibold px-2 py-0.5 rounded-lg">
                LAUCKE
              </span>
              - locally grown & milled
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-16 justify-center items-center bg-yellow-300 rounded-lg p-10">
        <img
          src="../images/houseRules/better-health.png"
          alt="Good for Guts"
          className="h-32 w-32"
        />
        <div>
          <h2 className="text-lg font-bold pb-6">Good for Guts</h2>
          <p className="text-sm">
            Our loaves ferment for
            <span className="bg-pink-200 font-semibold px-2 py-0.5 rounded-lg">
              24 to 48hrs
            </span>
            and in this time gluten is conditioned so that it is more
            bioavailable and comfortably consumed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
