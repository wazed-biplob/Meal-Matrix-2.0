import { useNavigate, useParams } from "react-router-dom";
import {
  useDonateSupplyMutation,
  useGetProductsQuery,
} from "../redux/api/baseApi";

"use client";

import { Modal } from "flowbite-react";
import { useRef, useState } from "react";
import { useAppSelector } from "../redux/feature/hook";
import { IProduct } from "../types/types";

const SingleProduct = () => {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const supplyProduct = {
    _id: id,
    quantity: 0,
  };
  const [supply, setSupply] = useState(supplyProduct);
  const [donateSupply] = useDonateSupplyMutation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await donateSupply(supply);
    console.log(res);
    if (res?.data?.data?.modifiedCount) {
      navigate(`/dashboard`);
    }
  };
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };
  const handleModal = () => {
    if (user?.username) {
      setOpenModal(true);
    } else {
      alert("Login First To Donate");
    }
  };

  const quantityRef = useRef<HTMLInputElement>(null);
  console.log(id);
  const { data } = useGetProductsQuery(undefined);
  console.log(data);
  const product = data?.data?.filter((item: IProduct) => item?._id === id);
  const item = product[0];
  console.log(item);
  return (
    <>
      <Modal
        show={openModal}
        size="xxl"
        onClose={onCloseModal}
        popup
        initialFocus={quantityRef}
      >
        <Modal.Header />
        <Modal.Body className="rounded-md">
          <section className="rounded-md bg-slate-700 text-[lightgrey] dark:bg-gray-100 dark:text-gray-900">
            <form
              onSubmit={handleSubmit}
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Supply Item Information</p>
                  <p className="text-xs">
                    Provide with How Much Quantity You want To Donate
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="" className="text-sm">
                      Product Title
                    </label>
                    <input
                      defaultValue={item?.title ? item?.title : ""}
                      disabled={item?.title ? true : false}
                      required
                      type="text"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="" className="text-sm">
                      Category
                    </label>
                    <input
                      required
                      defaultValue={item?.category ? item?.category : ""}
                      disabled={item?.category ? true : false}
                      type="text"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="" className="text-sm">
                      Quantity To Donate
                    </label>
                    <input
                      required
                      ref={quantityRef}
                      onChange={(e) =>
                        setSupply({
                          ...supply,
                          quantity: parseInt(e.target.value),
                        })
                      }
                      type="number"
                      className="bg-lime-300 text-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="" className="text-sm">
                      Supply Item Image URL
                    </label>
                    <input
                      defaultValue={item?.imageURL ? item?.imageURL : ""}
                      disabled={item?.imageURL ? true : false}
                      required
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="" className="text-sm">
                      Price
                    </label>
                    <input
                      defaultValue={item?.price ? item?.price : ""}
                      disabled={item?.price ? true : false}
                      required
                      type="number"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Donor Profile</p>
                  <p className="text-xs">
                    Your Credentials Will Automaticall be recorded.
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="" className="text-sm">
                      Donor Name
                    </label>
                    <input
                      defaultValue={user?.username ? user?.username : ""}
                      disabled={user?.username ? true : false}
                      required
                      type="text"
                      className="bg-slate-400 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="website" className="text-sm">
                      Email
                    </label>
                    <input
                      defaultValue={user?.email ? user?.email : ""}
                      disabled={user?.email ? true : false}
                      type="email"
                      className="w-full bg-slate-400 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="" className="text-sm">
                      Donor Image URL
                    </label>
                    <input
                      defaultValue={
                        item?.donorImageURL ? item?.donorImageURL : ""
                      }
                      disabled={item?.donorImageURL ? true : false}
                      required
                      placeholder=""
                      className="bg-slate-400 w-full py-2 px-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <button
                    className="w-full rounded-md col-span-full border px-2 py-4 text-xl font-bold hover:bg-slate-500 hover:text-stone-300"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
        </Modal.Body>
      </Modal>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={item?.imageURL}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Get Supply
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button
                    onClick={() => handleModal()}
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {item?.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {item?.description}
              </p>
              <div className="flex gap-x-2 mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price: $
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {item?.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:&nbsp;
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    In Stock:&nbsp;
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {item?.supply}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Sold:&nbsp;
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {item?.sold}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Categories/Variants:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Platter:
                </span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    5
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    10
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    15
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    20
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    30
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {item?.description}
                </p>
              </div>
              <div className="mt-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Customer Reviews
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-md mt-2 text-bold">
                  Rating : {item?.rating} <br /> {item?.review}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
