import { useState } from "react";
import Exit from "assets/svg/Exit.svg";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, "");

    if (value.length <= 3) {
      setPhoneNumber(value);
    } else if (value.length <= 7) {
      setPhoneNumber(`${value.slice(0, 3)}-${value.slice(3)}`);
    } else {
      setPhoneNumber(
        `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`
      );
    }
  };

  const isButtonDisabled = phoneNumber.length !== 13;

  return (
    <div className="bg-login-button flex flex-col h-full">
      <div className="h-[44px]"></div>
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          <img src={Exit} alt="Exit Icon" className="w-6 h-6" />
        </button>
        <p className="text-center flex-grow font-bold">휴대폰 번호 입력</p>
        <div className="w-6 h-6"></div>
      </div>
      <section className="flex flex-col justify-between h-full">
        <div className="px-4 py-5">
          <input
            type="text"
            value={phoneNumber}
            onChange={handleInputChange}
            maxLength={13}
            className="w-full h-[56px] rounded-lg border border-gray px-6 focus:border-green focus:outline-none font-bold"
            placeholder="휴대폰 번호를 입력하세요"
          />
        </div>
        <div className="flex justify-center">
          <button
            disabled={isButtonDisabled}
            className={`w-[120px] h-[54px] rounded-[60px] text-white font-bold mt-auto mb-40 ${
              isButtonDisabled ? "bg-gray" : "bg-green"
            }`}
            onClick={() => navigate("/login/auth/phone-number")}
          >
            다음
          </button>
        </div>
      </section>
    </div>
  );
};

export default Auth;
