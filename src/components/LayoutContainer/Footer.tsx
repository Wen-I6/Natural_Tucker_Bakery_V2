// components/layout/Footer.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ShopProps = {
  id: number;
  name: string;
  address: string;
  phone: string;
  openingHours: string;
};

const Footer: React.FC = () => {
  const [shops, setShops] = useState<ShopProps[]>([]);
  const go = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/shops");
        if (!res.ok) throw new Error("json-server not available");
        const data = await res.json();
        setShops(data);
      } catch (error) {
        console.warn("Falling back to public/shops.json", error);
        try {
          const res = await fetch("/shops.json");
          if (!res.ok) throw new Error("Fallback JSON not available");
          const data = await res.json();
          setShops(data);
        } catch (fallbackError) {
          console.error("Failed to load fallback data too:", fallbackError);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <footer className="font-mono bg-blue-200 text-gray-900 px-8 py-16">
        <div className="text-center text-4xl font-bold pb-14">
          <span className="inline-block border-b-2 border-gray-600 pb-1">
            Locations
          </span>
        </div>
        <div className=" max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center pb-6">
          {shops.map((shop) => (
            <div key={shop.id} className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold mb-2">{shop.name}</h2>
              <p className="text-xs">{shop.address}</p>
              <p className="text-xs">{shop.phone ? shop.phone : ""}</p>
              <p className="text-xs">{shop.openingHours}</p>
            </div>
          ))}
        </div>
        <hr className="my-8 border-t-1 border-gray-900 ax-w-5xl mx-auto lg:max-w-[1024px] lg:max-w-auto lg:px-0" />
        <div className="grid grid-cols-3 text-center py-4 max-w-5xl mx-auto lg:max-w-[1024px] lg:max-w-auto lg:px-0 items-center">
          <p onClick={() => go("/ContactUs")}>
            <span className="underline-hover">Contact Us</span>
          </p>
          <img
            src="./images/logo/NT.png"
            alt="shop logo"
            className="h-16 cursor-pointer absolute left-1/2 transform -translate-x-1/2 cursor-default"
          />
        </div>
        <div className="text-center mt-16 text-sm">
          &copy; {new Date().getFullYear()} Natural Tucker Bakery
        </div>
      </footer>
    </>
  );
};

export default Footer;
