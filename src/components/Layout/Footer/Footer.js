import s from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={s.root} id="contact_panel">
      <div className="flex flex-col gap-4 items-center justify-center w-full lg:w-1/3 mt-6 lg:mt-0">
        <div className="text-[30px] sm:text-[40px] text-[#FFE300] font-bold font-sefer">
          Twitter
        </div>
        <img
          src="/assets/images/twitterIcon.jpg"
          className="w-[250px] h-[300px]"
          alt="twitter"
        />
        <div className="text-[24px] sm:text-[28px]font-bold">
          <a href="https://twitter.com/@savethejewcoins">@savethejewcoins</a>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full lg:w-1/3 mt-6 lg:mt-0">
        <div className="text-[30px] sm:text-[40px] text-[#FFE300] font-bold font-sefer">
          Telegram
        </div>
        <img
          src="/assets/images/telIcon.png"
          className="w-[250px] h-[300px]"
          alt="Telegram"
        />
        <div className="text-[24px] sm:text-[28px]font-bold">
          <a href="https://t.me/Save_The_Jewcoins">@SAVE_THE_JEWCOINS</a>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full lg:w-1/3 mt-6 lg:mt-0">
        <div className="text-[30px] sm:text-[40px] text-[#FFE300] font-bold font-sefer">
          Email
        </div>
        <img
          src="/assets/images/mailIcon.png"
          className="w-[300px] h-[300px] p-[50px]"
          alt="Email"
        />

        <div className="text-[24px] sm:text-[28px]font-bold text-center">
          savethejewcoins
          <br />
          @protonmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
