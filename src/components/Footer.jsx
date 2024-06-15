import { Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex uppercase text-white md:flex-row flex-col justify-around md:h-28 h-24 text-[14px] items-center bg-black">
      <div className="flex gap-4">
        <Facebook
          size={30}
          color="#fffafa"
          strokeWidth={1}
          absoluteStrokeWidth
        />{" "}
        <Twitter
          size={30}
          color="#fffafa"
          strokeWidth={1}
          absoluteStrokeWidth
        />
      </div>
      <div>
        <p>© 2024 MAKEMYTRIP PVT. LTD.</p>
        <p>Country India USA UAE</p>
      </div>
    </div>
  );
};

export default Footer;
