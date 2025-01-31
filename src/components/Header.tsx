import Dot from "../assets/svg/Dot.svg";
import Bell from "../assets/svg/Bell.svg";

interface HeaderProps {
  leftText: string;
  rightText: string;
  activeTab: "left" | "right";
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const Header = ({
  leftText,
  rightText,
  activeTab,
  onLeftClick,
  onRightClick,
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <button
          className={`font-bold text-2xl ${
            activeTab === "left" ? "text-[#171A1B]" : "text-[#8A8A8E]"
          }`}
          onClick={onLeftClick}
        >
          {leftText}
        </button>
        <img src={Dot} className="px-2.5" alt="Dot Icon" />
        <button
          className={`font-bold text-2xl ${
            activeTab === "right" ? "text-[#171A1B]" : "text-[#8A8A8E]"
          }`}
          onClick={onRightClick}
        >
          {rightText}
        </button>
      </div>
      <img src={Bell} alt="Bell Icon" />
    </header>
  );
};

export default Header;
