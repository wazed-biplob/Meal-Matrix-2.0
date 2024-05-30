import { useEffect, useRef } from "react";
import AboutUs from "../components/AboutUs";
import CardSection from "../components/CardSection";
import DonorSection from "../components/DonorSection";
import Clients from "../components/Feature";
import FreeTrial from "../components/FreeTrial";
import Hero from "../components/Hero";
import { CarouselSlider } from "../components/Slider";
import { motion, useAnimation, useInView } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  const inView = useInView(ref, {
    // @ts-expect-error 'runs ok with dev script'
    triggerOnce: true,
    threshold: 0.1,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (inView: any) => {
      if (inView) {
        controls.start("visible");
      }
    },
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = () => {
  return (
    <div className="bg-slate-300 dark:bg-slate-800">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
      <CardSection />
      <DonorSection />
      <CarouselSlider />
      <AboutUs />
      <FreeTrial />
      <CardWrapper>
        <Clients />
      </CardWrapper>
    </div>
  );
};

export default Homepage;
