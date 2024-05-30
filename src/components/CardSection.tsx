/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/baseApi";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import { motion, useAnimation, useInView } from "framer-motion";
import { IProduct } from "../redux/feature/productSlice";
import { useEffect, useRef } from "react";
import Container from "./SectionContainer";
import SectionContainer from "./SectionContainer";
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const CardWrapper = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
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
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const CardSection = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data;

  if (isLoading) {
    return (
      <div>
        <div className="relative w-full h-10 flex items-center justify-center">
          <div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-sky-600"></div>
          <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] border rounded-full border-sky-600 absolute"></div>
        </div>
      </div>
    );
  }
  return (
    <SectionContainer>
      <div className="flex flex-col justify-center items-center">
        <SectionHeading subtitle="Join us in a celebration of food that’s both delightful and unforgettable. Taste the difference in every product, crafted to bring joy and satisfaction to your table.">
          Supply Products
        </SectionHeading>
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 justify-items-center">
          {products?.slice(0, 6).map((product: IProduct, index: number) => (
            <CardWrapper key={product._id} index={index}>
              <Card product={product} />
            </CardWrapper>
            // <motion.div
            //   key={product._id}
            //   variants={cardVariants}
            //   initial="hidden"
            //   animate="visible"
            //   transition={{
            //     duration: 1.0,
            //     ease: "easeOut",
            //     delay: products.indexOf(product) * 0.5,
            //   }}
            // >
            //   <Card product={product} />
            // </motion.div>
          ))}
        </div>
        <div>
          <Link to="/supplies">
            <button className="my-8 py-4 border px-6 rounded-md text-center mx-auto font-bold hover:bg-slate-400 hover:text-white dark:text-[lightgrey]">
              View All Supplies
            </button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CardSection;
