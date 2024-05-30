import DonorsCard from "../components/DonorsCard";
import Loader from "../components/Loader";
import SectionContainer from "../components/SectionContainer";
import SectionHeading from "../components/SectionHeading";
import { useGetDonorsQuery } from "../redux/api/baseApi";
import { IDonorDetails } from "../types/types";

const LeaderBoard = () => {
  const { data: donorsData, isLoading } = useGetDonorsQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <SectionContainer>
      <SectionHeading subtitle="We are profoundly grateful for the generous support of our incredible donors. Each donation, whether big or small, makes a significant impact in our mission to fight hunger and build a healthier community.">
        Our Acknowledged Donors
      </SectionHeading>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {donorsData?.data?.map((donor: IDonorDetails) => (
          <DonorsCard key={donor?._id} donor={donor} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default LeaderBoard;
