import Link from "next/link";
import Navbar from "../Navbar/Navbar";

import CustomButton from "@/Shared/CustomButton";

const Header = () => {
  return (
    <header className="w-full h-11 flex items-center justify-between py-8 px-22 bg-transparent">
      <Link href="/">
        <h2 className="text-primary font-sakana text-[23.25px] tracking-[3%] leading-none">
          NITRO
        </h2>
      </Link>
      <Navbar />
      <CustomButton>Buy Now</CustomButton>
    </header>
  );
};

export default Header;
