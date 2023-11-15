import Navbar from "../Navbar";




export default function Product() {
    const dataorang = [
        { nama: 'Aldan Prayogi', role: "Staff" },
        { nama: 'Muhammad Abdul Aziz Al-Ghifary', role: "Staff" },
        { nama: 'M. Dwi Chandra', role: "Staff" },
        { nama: 'Reyhana Naufal El-Bahreisyi', role: "Staff" },
        { nama: 'Rahadian Dwi Martina Putra', role: "CEO" },
    ];
    return (
        <div >
            <Navbar />
            <div className="pt-20 p-4">
                <div className=" gap-8 justify-around grid grid-cols-3 2xl:grid-cols-5">

                    {dataorang.map((item, index) => {
                        return (
                            <div key={index} className="h-[30rem] w-72 shadow-lg bg-gray-300 rounded-xl ">
                                <div className="flex flex-col items-center justify-around">
                                    <div className="w-14 h-14 xl:w-44 xl:h-44 mt-10 bg-red-600 rounded-full"></div>
                                    <div className="mt-10 text-center text-lg">{item.nama}</div>
                                    <div className="mt-2 text-center text-sm">{item.role}</div>

                                </div>


                                <div className="mt-14 right-6 top-10 flex flex-row item justify-center gap-4 ">
                                    <div className="h-10 w-10 bg-transparent rounded-lg">
                                        <img className="invert" src="/LogoIG.png" />
                                    </div>
                                    <div className="h-10 w-10 bg-black rounded-lg">
                                        <img className="" src="/LogoIN.png" />


                                    </div>
                                </div>

                            </div>


                        );
                    })}
                </div>
            </div>
        </div>
    )

}