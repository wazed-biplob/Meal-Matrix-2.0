import PostComment from "../components/PostComment";
import SectionHeading from "../components/SectionHeading";
import { useGetCommentsQuery } from "../redux/api/baseApi";
import { IComment } from "../types/types";
import SingleComment from "./SingleComment";

const Community = () => {
  const { data: commentData } = useGetCommentsQuery(undefined);
  return (
    <>
      <SectionHeading subtitle="Post your comments and express gratitude for the recipes, tips, and community that make cooking delightful. Your stories inspire others and help create a vibrant, supportive food-loving community.">
        Cummunity Gratitude Wall
      </SectionHeading>
      {commentData?.data?.map((comment: IComment) => (
        <SingleComment key={comment?._id} comment={comment} />
      ))}
      <PostComment />
    </>
  );
};

export default Community;
