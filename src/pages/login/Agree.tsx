import Exit from "assets/svg/Exit.svg";
import Check from "assets/svg/Check.svg";
import Arrow from "assets/svg/Arrow.svg";
import Line from "assets/svg/Line.svg";
import Confirm from "assets/svg/Confirm.svg";

const Agree = () => {
  return (
    <div className="bg-login-button flex flex-col h-full">
      <div className="h-[44px]"></div>
      <div className="flex items-center justify-between px-4 py-4">
        <img src={Exit} alt="Exit Icon" className="w-6 h-6" />
        <p className="text-center flex-grow font-bold">약관동의</p>
        <div className="w-6 h-6"></div>
      </div>
      <section className="flex flex-col h-full">
        <div className="flex px-4 py-4 justify-between">
          <div className="flex items-center">
            <img src={Check} alt="Check Icon" className="w-7 h-7" />
            <p className="text-agree-black ml-3.5 font-bold">전체 동의</p>
          </div>
          <img src={Arrow} alt="Arrow Icon" className="w-5 h-5" />
        </div>
        <img src={Line} alt="Line" className="w-full px-4 py-4" />
        <div className="flex flex-col flex-grow px-2.5 pt-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Confirm} className="w-5 h-5" />
              <p className="pl-2">
                <span className="text-green font-bold">(필수)</span> PLAV 서비스 이용약관
              </p>
            </div>
            <img src={Arrow} alt="Arrow Icon" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center">
              <img src={Confirm} className="w-5 h-5" />
              <p className="pl-2">
                <span className="text-green font-bold">(필수)</span> PLAV 개인정보수집 및 이용동의
              </p>
            </div>
            <img src={Arrow} alt="Arrow Icon" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Confirm} className="w-5 h-5" />
              <p className="pl-2">
                <span className="agree-gray font-bold">(선택)</span> 광고/마케팅성 정보수신동의
              </p>
            </div>
            <img src={Arrow} alt="Arrow Icon" className="w-5 h-5" />
          </div>
          <div className="flex-grow flex items-end justify-center">
            <button
              className="w-full h-[54px] rounded-[8px] text-white shadow-drop-shadow font-bold mt-auto mb-10 bg-green"
            >
              다음
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agree;
