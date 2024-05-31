import Loader from "../components/Loader";
import SectionContainer from "../components/SectionContainer";
import SectionHeading from "../components/SectionHeading";
import Volunteer from "../components/Volunteer";
import { useGetVolunteersQuery } from "../redux/api/baseApi";
import { IVolunteer } from "../types/types";

const AboutUs = () => {
  const { data: volunteerData, isLoading } = useGetVolunteersQuery(undefined);
  if (isLoading) return <Loader />;
  return (
    <>
      <SectionContainer>
        <SectionHeading
          subtitle={`Join Us in Making a Difference Volunteer: Your Time and Skills to Help End Hunger`}
        >
          Our Volunteer Team
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {volunteerData?.data?.map((volunteer: IVolunteer) => (
            <Volunteer volunteer={volunteer} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
};

export default AboutUs;
