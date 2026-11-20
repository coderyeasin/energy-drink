import { menuArr } from "@/lib/dynamic";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-28.25 ">
        {menuArr.map((item) => (
          <li
            key={item}
            className="text-tertiary font-outfit text-base hover:text-primary duration-300"
          >
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
<h3>Navbar</h3>;
