import { useState } from "react";
import { IComment } from "../types/types";
import { usePostCommentsMutation } from "../redux/api/baseApi";

const PostComment = () => {
  const [postUserComment] = usePostCommentsMutation();
  const commentData: IComment = {
    username: "",
    comment: "",
    commentDate: "",
    imgURL: "https://i.ibb.co/NYsF47j/i-1.png",
    likeCount: 0,
    email: "",
  };
  const [postComment, setPostComment] = useState(commentData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCommentData = {
      ...postComment,
      commentDate: new Date().toISOString(),
    };
    console.log(userCommentData);
    const res = await postUserComment(userCommentData);
    if (res?.data?.insertedId) {
      alert("Comment Has Been Successfully Posted");
    }
  };
  return (
    <div>
      <div className="">
        <div className="mx-auto max-w-screen-sm px-4">
          <h1 className="mt-6 text-xl font-bold sm:mb-6 sm:text-3xl text-center text-[gray]">
            Post Your Appreciation!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="-ml-20 flex p-4 text-left text-gray-700">
              <img
                className="mr-5 h-12 w-12 rounded-full"
                src="https://i.ibb.co/NYsF47j/i-1.png"
                alt=""
              />
              <div className="w-full space-y-3 text-gray-700">
                <div className="">
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none"
                    onBlur={(e) =>
                      setPostComment({
                        ...postComment,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none "
                    onBlur={(e) =>
                      setPostComment({
                        ...postComment,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="">
                  <textarea
                    name="comment"
                    placeholder="Write your comment here"
                    cols="30"
                    rows="6"
                    className="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100"
                    onBlur={(e) =>
                      setPostComment({
                        ...postComment,
                        comment: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="float-right">
                  <input
                    type="submit"
                    value="Post Comment"
                    className="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-slate-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none "
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
