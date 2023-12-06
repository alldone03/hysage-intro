import { useState } from "react";

export default function Ourproduct() {
  const [imagearr, setImageArray] = useState(0);
  const linkimage = [
    "/img/bg-effect.webp",
    "/img/bg-effect.webp",
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
              className="animate-bounce  outline outline-2 mt-10 rounded-lg p-2 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 mx-4 hover:text-white "
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
              className="animate-bounce  outline outline-2  rounded-lg p-2 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 mx-4 hover:text-white "
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
    </div>
  );
}
