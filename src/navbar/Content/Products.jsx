import Navbar from "../Navbar";




export default function Product() {
    const dataorang = [
        { nama: 'Aldan Prayogi' },
        { nama: 'Muhammad Abdul Aziz Al-Ghifary' },
        { nama: 'M. Dwi Chandra' },
        { nama: 'Reyhana Naufal El-Bahreisyi' },
        { nama: 'Rahadian Dwi Martina Putra' },
    ];
    return (
        <div >
            <Navbar />
            <div className="pt-20 p-4">
                <div className="flex gap-8 justify-around">

                    {dataorang.map((item, index) => {
                        return (
                            <div key={index} className="h-96 w-96 shadow-lg bg-gray-300 rounded-xl ">
                                <div className="flex flex-col items-center justify-around">
                                    <div className="w-44 h-44 mt-10 bg-red-600 rounded-full"></div>
                                    <div className="mt-10 text-center text-lg">{item.nama}</div>
                                    <div className="flex flex-row item justify-center gap-4 mt-10">
                                        <div className="h-10 w-10 bg-black rounded-lg"></div>
                                        <div className="h-10 w-10 bg-black rounded-lg"></div>
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