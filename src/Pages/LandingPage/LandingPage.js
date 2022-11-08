import Login from "../../Components/Login/Login";
import CarouselComp from "../../Components/CarouselComp/CarouselComp";
import NavbarComp from "../../Components/NavbarComp/NavbarComp";
import "./LandingPage.css";
import background from "../../assets/images/background-img.jpg";

const LandingPage = () => {
  return (
    <div className="landingBody">
      <NavbarComp></NavbarComp>
      <div className="landingPage">
        <div className="carouselOnLanding">
          <CarouselComp></CarouselComp>
        </div>
        <div className="loginOnLanding">
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
