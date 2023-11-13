import { useEffect } from "react";
import Content from "./navbar/Content/Content"
import Navbar from "./navbar/Navbar"
import Aos from "aos";





function App() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div >
        <Navbar />
        <Content />
      </div>
    </>
  )
}

export default App
