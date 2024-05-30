import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import { motion, useScroll, useSpring } from "framer-motion";
const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="z-50 w-full h-[10px] progress-bar"
        style={{ scaleX }}
      />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
