import HeaderLinks from "./HeaderLinks";

const HeaderMain = () => {
  return (
    <div>
      <h1>VihaanAiGames</h1>
      <nav>
        <HeaderLinks link="https://home" title=" Home "></HeaderLinks>
        <HeaderLinks link="https://aboutus" title=" About Us "></HeaderLinks>
        <HeaderLinks link="https://Contact" title=" Contact "></HeaderLinks>
      </nav>
    </div>
  );
};

export default HeaderMain;
