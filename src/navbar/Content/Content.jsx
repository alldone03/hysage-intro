import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Ourproduct from "./Ourproduct";

export default function Content() {
  const dataorang = [
    {
      linkfoto: "/img/ourteam/dian.webp",
      nama: "Rahadian Dwi Martina Putra",
      role: "CEO",
      linkedin: "#",
      instagram: "https://www.instagram.com/dian_dwi_mp/",
    },
    {
      linkfoto: "/img/ourteam/aldan.webp",
      nama: "Aldan Prayogi",
      role: "Project Management",
      linkedin: "www.linkedin.com/in/aldan-prayogi-3bb66a252",
      instagram: "https://www.instagram.com/aldan_prayogi/",
    },
    {
      linkfoto: "/img/ourteam/ghiffar.webp",
      nama: "Muhammad Abdul Aziz Alghiffari",
      role: "Administration",
      linkedin:
        "https://www.linkedin.com/in/muhammad-abdul-aziz-alghiffari-a3ab9327b/",
      instagram: "https://www.instagram.com/ghiffariii._/",
    },
    {
      linkfoto: "/img/ourteam/reyhana.webp",
      nama: "Reyhana Naufal El-Bahreisyi",
      role: "Electrical Engineering",
      linkedin: "#",
      instagram: "https://www.instagram.com/reyhanaufal_/",
    },
    {
      linkfoto: "/img/ourteam/chandra.webp",
      nama: "M. Dwi Chandra",
      role: "Technical Engineering",
      linkedin: "https://www.linkedin.com/in/diana-jones154df56/",
      instagram: "https://www.instagram.com/ch_ndraa/",
    },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Aos.init();
  }, []);
  return (
    <>
      <Link
        to={"http://wa.me/+62895339377151"}
        target="_blank"
        className={`fixed ${
          scrollPosition > 100 ? "visible" : "invisible"
        } z-10 w-16 h-16  md:w-20 md:h-20 bg-cyan-500 hover:bg-cyan-800  rounded-3xl right-10 bottom-10 md:right-7 md:bottom-7 flex items-center justify-center`}
      >
        <img className="invert w-10 " src="/img/conversation.png" alt="" />
      </Link>
      <div id="home"></div>
      <div className="absolute bg-[url('/img/bg-effect.webp')] w-screen h-screen  bg-cover xl:h-[100%] xl:w-[100%]  left-0 top-0 backdrop-blur-2xl brightness-50 pt-20 p-4 ">
        {/* <div className="bg-gradient-to-b from-transparent to-white w-full absolute h-[100px] left-0 bottom-0"></div> */}
      </div>

      <div>
        <div
          data-aos="zoom-in-up"
          className="relative z-10 pt-20 p-4 min-h-screen flex flex-col min-w-full justify-center text-center"
        >
          <div className="text-white text-7xl xl:text-9xl font-semibold font-['Roboto Flex']">
            HyGrow.
          </div>
          <div className=" h-11 mt-4 text-white text-2xl xl:text-4xl font-semibold font-['Roboto Flex']">
            Grow Beyond Limits
          </div>
        </div>
      </div>
      <div
        className=" h-screen pt-24 p-4 flex flex-col xl:flex-row-reverse  xl:items-center justify-center "
        id="aboutus"
      >
        <div className="flex flex-col xl:flex-row  justify-center xl:gap-14">
          <div
            data-aos="fade-left"
            className="w-[371px] h-[541px] bg-[url('/img/bg-effect.webp')] self-center rounded-xl  "
          ></div>
          <div
            data-aos="fade-right"
            className="text-center xl:text-left pt-4 xl:text-xl xl:w-[50rem]"
          >
            <h1 className="font-thin text-2xl">About Us</h1>
            <h1 className=" flex font-bold text-3xl justify-center xl:justify-start">
              <div className="text-green-400">Hy</div>
              <div className="text-cyan-500">SAGE</div>
            </h1>
            Welcome to HySage, where modern agriculture meets innovation! Our
            hydroponic solution brings Urban Farming to the next level,
            seamlessly integrating IoT technology. With real-time control over
            nutrition and environmental factors, HySage empowers you to
            cultivate smarter and more sustainably. Join us in shaping a future
            of cutting-edge, productive farming experiences.
          </div>
        </div>
      </div>
      <Ourproduct />

      <div className="h-7 md:h-0"></div>
      <div className="mt-[80rem] md:mt-[0rem] md:pt-20 p-4 ">
        <h1 data-aos="zoom-in" className="text-4xl text-center">
          OUR TEAM
        </h1>
        <div className="mt-4 gap-5 gap-y-5 justify-center align-middle xl:flex px-14 grid md:grid-cols-3 ">
          {dataorang.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative h-[30rem] lg:h-96 lg:w-60 overflow-hidden p-2 shadow-lg bg-gray-300 rounded-xl`}
                data-aos={`${
                  index == 2
                    ? "zoom-in-up"
                    : index < 2
                      ? "fade-right"
                      : "fade-left"
                }`}
              >
                <div className="flex flex-col items-center justify-around">
                  <div
                    className={`w-80 h-60 lg:w-60 lg:h-40 mt-10 rounded-full`}
                  >
                    <img
                      className="-rotate-90 rounded-lg max-w-full h-auto"
                      src={item.linkfoto}
                      alt={item.linkfoto}
                    />
                  </div>
                  <div className="mt-10 text-center text-lg">{item.nama}</div>
                </div>
                <div className="absolute left-0 bottom-28 lg:bottom-[3.5rem] w-full">
                  <div className="mt-2 text-center text-sm">{item.role}</div>
                </div>

                <div className="absolute left-0 bottom-10 lg:bottom-3 w-full ">
                  <div className=" flex flex-row item justify-center gap-4">
                    <div className="hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out delay-150 border-2 border-black p-1 h-9 w-9 bg-transparent rounded-lg">
                      <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        to={item.instagram}
                      >
                        <img
                          className="invert md:h-fit md:w-fit"
                          src="/img/LogoIG.webp"
                          alt="logo-instagram"
                        />
                      </Link>
                    </div>
                    <div className="hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out delay-150 h-9 w-9 border-2 border-gray-50 p-1 invert rounded-lg">
                      <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        to={item.linkedin}
                      >
                        <img
                          className="h-fit w-fit"
                          src="/img/linkedin.svg"
                          alt="logo-linkedin"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="bg-gradient-to-b from-white via-sky-500 to-blue-900 text-white">
        <div className="pt-36 w-screen  flex justify-around flex-col items-center gap-4 ">
          {/* <div className=" text-center text-white pt-20">
            <h1 className="font-bold text-2xl">Help & Support</h1>
            <br />
            <h2>Contact Us</h2>
            <h2>Support Center</h2>
            <h2>Work With Us</h2>
          </div> */}
          <div className="flex items-center flex-col gap-3">
            <h1 className="font-bold text-2xl">Follow Us</h1>
            <Link
              className="h-9 w-9"
              to={"https://www.instagram.com/hysage.id/"}
              target="_blank"
            >
              <img
                className="md:h-fit md:w-fit"
                src="/img/LogoIG.webp"
                alt="logo-instagram"
              />
            </Link>
          </div>
        </div>
        <div className="text-center pb-10 pt-10">&copy; HySage 2023</div>
      </footer>
    </>
  );
}
