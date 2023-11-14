import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';


export default function Content() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="absolute bg-[url('/img/bg-effect.jpg')] w-screen h-screen  bg-cover xl:h-[100%] xl:w-[100%]  left-0 top-0 backdrop-blur-2xl brightness-50 pt-20 p-4 ">
            </div>

            <div data-aos="zoom-in-up" className="relative z-10 pt-20 p-4 min-h-screen flex flex-col min-w-full justify-center text-center">


                <div className="text-white text-7xl xl:text-9xl font-semibold font-['Roboto Flex']">HyGrow.</div>
                <div className=" h-11 mt-4 text-white text-2xl xl:text-4xl font-semibold font-['Roboto Flex']">Grow Beyond Limits</div>


            </div>
            <div className="h-screen pt-24 p-4 flex flex-col xl:flex-row-reverse  xl:items-center justify-center ">
                <div className="flex flex-col xl:flex-row-reverse  xl:items-center justify-center xl:gap-14">

                    <div data-aos="fade-left" className="w-[371px] h-[541px] bg-[url('/img/bg-effect.jpg')] self-center rounded-xl  "></div>
                    <div data-aos="fade-right" className="text-center xl:text-left pt-4 xl:text-xl xl:w-[50rem]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque molestiae ea, corporis tenetur inventore ut iste? Quibusdam illum laudantium porro enim labore cumque quisquam, illo libero est, eveniet nihil repudiandae!
                    </div>
                </div>
            </div>
        </>
    );
}