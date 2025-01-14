import { useState, useEffect } from "react";
import Exit from "assets/svg/Exit.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [timeLeft, setTimeLeft] = useState(180);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); 

  const isButtonDisabled = inputValue.length !== 6;


  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendDisabled(false); 
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(180);
    setIsResendDisabled(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="bg-login-button flex flex-col h-full">
      <div className="h-[44px]"></div>
      <div className="flex items-center justify-between px-4 py-4">
        <img src={Exit} alt="Exit Icon" className="w-6 h-6" />
        <p className="text-center flex-grow font-bold">인증번호 입력</p>
        <div className="w-6 h-6"></div>
      </div>
      <section className="flex flex-col justify-between h-full">
        <div className="px-4 py-5">
        <div className="relative">
            <input
              type="text"
              maxLength={6}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} 
              className="w-full h-[56px] rounded-lg border border-gray px-6 pr-[80px] focus:border-green focus:outline-none font-bold"
            />
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-button font-bold">
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handleResend}
              className={"text-gray-button font-bold underline decoration-2"}
            >
              인증번호 재전송
            </button>
          </div>
        </div>
        <div className="flex justify-center">
        <button
            disabled={isButtonDisabled} 
            className={`w-[120px] h-[54px] rounded-[60px] text-white font-bold mt-auto mb-10 ${
              isButtonDisabled ? "bg-gray" : "bg-green"
            }`}
            onClick={() => navigate("/agree")}
          >
            다음
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
