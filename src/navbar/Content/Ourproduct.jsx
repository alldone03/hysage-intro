import { useState } from "react";

export default function Ourproduct() {
  const [imagearr, setImageArray] = useState(0);
  const linkimage = [
    "/img/bg-effect.webp",
    "/img/LogoIN.png",
    "/img/bg-effect.webp",
  ];
  return (
    <div id="product">
      <div className=" visible md:visible pt-16 md:pt-20 xl:pt-0 p-4 h-0 md:h-screen flex flex-col gap-7 xl:items-center md:flex md:flex-col ">
        <h1 className=" text-4xl text-center ">Our Products</h1>
        <div className="flex flex-col md:flex md:flex-row  items-center ">
          <div data-aos="fade-left" className="w-[371px] h-[541px]">
            <img
              src={linkimage[imagearr]}
              className="rounded-xl"
              alt={linkimage[imagearr]}
            />
          </div>
          <div className="flex flex-col gap-10 md:w-[40rem] md:pl-24">
            <div
              onClick={() => {
                setImageArray(1);
              }}
              data-aos="fade-up"
              className="outline outline-2 mt-10 rounded-lg p-2 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 mx-4 hover:text-white "
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className=" md:text-2xl font-bold">BASIC</h1>
                  <h1 className=" ">HySage Smart Module with Box</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-center  font-bold ">IDR 900.000</div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setImageArray(2);
              }}
              data-aos="fade-up"
              className="outline outline-2  rounded-lg p-2 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 mx-4 hover:text-white "
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="md:text-2xl font-bold">PRO</h1>
                  <h1 className=" w-72 ">
                    Fullset HySage Included pH Sensor, TDS Sensor, AB Mix 1L, pH
                    up & down 250mL
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-center  font-bold ">IDR 2.000.000</div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="outline outline-2   outline-gray-400 rounded-lg p-2  mx-4 hover:text-white "
            >
              <div className="flex justify-between text-gray-400">
                <div className="flex flex-col">
                  <h1 className="md:text-2xl font-bold">Premium</h1>
                  <h1 className="md:w-72">
                    Fullset HySAGE, Membership for 1 month, Early access to
                    newest product, Merchandise HySAGE
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-center  font-bold text-red-600">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" visible md:visible pt-0 md:pt-20 xl:pt-0 p-4 h-0 md:h-screen flex flex-row gap-7 xl:items-center justify-center">
          <div
            data-aos="fade-left"
            className="w-[371px] h-[541px] bg-[url('/img/bg-effect.webp')] self-center rounded-xl  "
          ></div>
          <div className="text-center xl:text-left pt-4 xl:text-xl xl:w-[50rem]">
            <h1 className=" text-4xl">Our Products</h1>
            <div className="h-4"></div>
            <div className="flex flex-col gap-9">
              <div
                data-aos="zoom-in-up"
                className="outline outline-2  outline-gray-900 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white rounded-lg p-5"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h1 className="md:text-3xl font-bold">BASIC</h1>
                    <h1 className="md:text-lg ">
                      HySage Smart Module with Box
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-center md:text-4xl BASICfont-bold ">
                      IDR 900.000
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-up"
                className=" outline outline-2 outline-gray-900 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white  rounded-lg p-5"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">PRO</h1>
                    <h1 className="text-lg w-96">
                      Fullset HySage Included pH Sensor, TDS Sensor, AB Mix 1L,
                      pH up & down 250mL
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-center text-4xl font-bold ">
                      IDR 2.000.000
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-up"
                className=" outline outline-2 outline-gray-400   rounded-lg p-5"
              >
                <div className="flex justify-between text-gray-400">
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">Premium</h1>
                    <h1 className="text-lg w-96">
                      Fullset HySAGE, Membership for 1 month, Early access to
                      newest product, Merchandise HySAGE
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-center text-4xl font-bold ">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* <div className="hidden md:hidden pt-20 xl:pt-20  p-4 h-screen">
          <h1 data-aos="zoom-in" className="text-4xl text-center">
            OUR PRODUCT
          </h1>
          <div className="w-full flex flex-col gap-8 xl:gap-0 xl:px-60 items-center xl:flex-row xl:justify-around pt-6">
            <div
              data-aos="zoom-in-up"
              className="relative w-48 h-64 border border-gray-200 bg-gray-300 rounded-3xl"
            >
              <div className="absolute rounded-3xl w-full h-14 font-bold text-center self-center flex flex-col justify-center text-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 ">
                Basic
              </div>
              <div className=" absolute w-full pt-16 font-bold text-xl text-center">
                IDR 900.000
              </div>
              <div className="absolute pt-16 text-center h-full min-h-full flex flex-col text-sm justify-center">
                <div>HySage Smart Module with Box</div>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              className="relative w-48 h-64 border border-gray-200 bg-gray-300 rounded-3xl"
            >
              <div className="absolute rounded-3xl w-full h-14 font-bold text-center self-center flex flex-col justify-center text-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 ">
                Pro
              </div>
              <div className=" absolute w-full pt-16 font-bold text-xl text-center">
                IDR 2.000.000
              </div>
              <div className="absolute   h-full min-h-full text-sm pt-20 justify-center p-3">
                <div className="pt-5">
                  Fullset HySage
                  <ul className="list-disc list-inside">
                    <li>pH Sensor</li>
                    <li>TDS Sensor</li>
                    <li>AB Mix 1L</li>
                    <li>pH up 250mL</li>
                    <li>pH down 250mL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              className="relative w-48 h-64 border border-gray-200 bg-gray-300 rounded-3xl "
            >
              <div className="absolute rounded-3xl w-full h-14 font-bold text-center self-center flex flex-col justify-center text-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 ">
                Premium
              </div>
              <div className=" absolute w-full pt-16 font-bold text-xl text-center">
                IDR 2.250.000
              </div>
              <div className="absolute   h-full min-h-full text-sm pt-20 justify-center p-3">
                <div className="pt-5">
                  <ul className="list-disc list-inside">
                    <li>Fullset HySage</li>
                    <li>Membership 1 month</li>
                    <li>Early Access to Newest Product</li>
                    <li>Merchandise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center pt-8"></div>
        </div> */}
    </div>
  );
}
