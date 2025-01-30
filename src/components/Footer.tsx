import Home from "../assets/svg/Home.svg";
import Plus from "../assets/svg/Plus.svg";
import Profile from "../assets/svg/Profile.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-[#E5E8EB] border-[1px] max-w-[430px] mx-auto rounded-t-[24px] z-10 bg-white">
      <div className="flex justify-between items-center px-14 pt-4 pb-4">
        <button>
          <img src={Home} alt="Home" />
        </button>
        <button>
          <img src={Plus} alt="Add" />
        </button>
        <button>
          <img src={Profile} alt="Profile" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
