import Logo from "../../assets/image/plav_logo.png";

const Login = () => {
  return (
    <div className="bg-login-bg h-screen flex flex-col justify-center items-center px-4">
      <img src={Logo} alt="Logo" className="w-60 h-26 m-auto "/>
      <div className="button_center w-full flex justify-center mt-4">
      <button className="text-base leading-relaxed font-bold bg-login-button w-full rounded-lg py-3.5 mb-10 shadow-drop-shadow font-Pretendard text-button-font">로그인</button>
      </div>
    </div>
  );
};

export default Login;
