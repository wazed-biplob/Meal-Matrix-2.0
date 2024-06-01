import { FormEvent, useState } from "react";

import { usePostTestimonialMutation } from "../redux/api/baseApi";

const CreateTestimonials = () => {
  const [postTestimonial] = usePostTestimonialMutation();

  const testimonialData = {
    donorName: "",
    email: "",
    description: "",
    rating: "",
    donorImageURL: "https://i.ibb.co/NYsF47j/i-1.png",
    reviewDate: "",
  };

  const [postReview, setPostReview] = useState(testimonialData);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const donorTestimonialData = {
      ...postReview,
      reviewDate: new Date().toISOString(),
    };

    const res = await postTestimonial(donorTestimonialData);
    if (res?.data?.data?.insertedId) {
      alert("Comment Has Been Successfully Posted");
    }
  };
  return (
    <div className="mx-auto w-[70%]">
      <h1 className="mt-6 text-xl font-bold sm:mb-6 sm:text-3xl text-[#ffffff]">
        Post Testimonial
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
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
                  setPostReview({
                    ...postReview,
                    donorName: e.target.value,
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
                  setPostReview({
                    ...postReview,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Select a Rating from 1 to 5"
                className="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none "
                min={1}
                max={5}
                onBlur={(e) =>
                  setPostReview({
                    ...postReview,
                    rating: e.target.value,
                  })
                }
              />
            </div>
            <div className="">
              <textarea
                name="comment"
                placeholder="Your Testimonial goes here..."
                cols={30}
                rows={6}
                className="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100"
                onBlur={(e) =>
                  setPostReview({
                    ...postReview,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="float-right">
              <input
                type="submit"
                value="Submit Testimonial"
                className="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-slate-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none "
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonials;
