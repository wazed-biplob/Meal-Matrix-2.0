import React, { useEffect, useRef } from "react";
import { useGetDonorReviewsQuery } from "../redux/api/baseApi";
import DonorCard, { IReview } from "./DonorCard";
import SectionHeading from "./SectionHeading";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionContainer from "./SectionContainer";
import Loader from "./Loader";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
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

const DonorSection = () => {
  const { data, isLoading, isFetching } = useGetDonorReviewsQuery(undefined);
  if (isLoading || isFetching) return <Loader />;
  return (
    <>
      <SectionContainer>
        <SectionHeading subtitle="Don’t just take our word for it – read on to see how our carefully curated selection has transformed everyday meals into extraordinary feasts. Join our community of food lovers who trust us to bring the finest ingredients and the most delicious treats to their kitchens.">
          Real Flavor: Hear from Our Satisfied Customers!
        </SectionHeading>
        <div className="grid grid-cols-3 gap-4">
          {data?.data?.slice(0, 6).map((review: IReview, index: number) => (
            <CardWrapper key={review._id} index={index}>
              <DonorCard review={review} />
            </CardWrapper>
          ))}
        </div>
      </SectionContainer>
    </>
  );
};

export default DonorSection;
