import "./Navbar.scss";
import { motion } from "framer-motion";
import SideBar from "../Sidebar/SideBar";

const socialMediaLinks = [
  { platform: "facebook", url: "https://www.facebook.com/Emsondesigns/" },
  { platform: "instagram", url: "https://www.instagram.com/emson_designs/" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Emson Designs
        </motion.span>

        <div className="social flex flex-row">
          {socialMediaLinks.map(({ platform, url }, idx) => (
            <a href={url} key={idx} target="_blank">
              <img src={`/social-logos/${platform}.png`} alt={platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
