import Dot from "../assets/svg/Dot.svg";
import Bell from "../assets/svg/Bell.svg";

interface HeaderProps {
  leftText: string;
  rightText: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const Header = ({
  leftText,
  rightText,
  onLeftClick,
  onRightClick,
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <button className="font-bold text-2xl" onClick={onLeftClick}>
          {leftText}
        </button>
        <img src={Dot} className="px-2.5" alt="Dot Icon" />
        <button className="font-bold text-2xl" onClick={onRightClick}>
          {rightText}
        </button>
      </div>
      <img src={Bell} alt="Bell Icon" />
    </header>
  );
};

export default Header;
