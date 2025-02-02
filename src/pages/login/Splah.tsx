import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/Logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gray-01 h-screen flex flex-col justify-center items-center px-4">
      <img src={Logo} alt="Logo" className="w-60 h-26 m-auto" />
      <div className="button_center w-full flex justify-center mt-4"></div>
    </div>
  );
};

export default Splash;
