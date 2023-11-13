import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';


export default function Content() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="pt-20 p-4">
                <h1 className="text-center text-4xl">HYSAGE</h1>
                <p className="text-robotoflex">hello</p>


            </div>
        </>
    );
}