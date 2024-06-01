"use client";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../redux/api/baseApi";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useAppSelector } from "../redux/feature/hook";
import { IProduct } from "../types/types";

const AllSuppliies = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetProductsQuery(undefined);

  const [openModal, setOpenModal] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);

  const [item, setItem] = useState<IProduct>();

  // gets productId from table row
  const [productId, setProductId] = useState({ id: "" });

  const [removeProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const defaultProduct = {
    _id: item?._id,
    title: item?.title,
    imageURL: item?.imageURL,
    category: item?.category,
    description: item?.description,
    quantity: item?.quantity,
    review: item?.review,
    rating: item?.rating,
    donorName: item?.donorName,
    donorImageURL: item?.donorImageURL,
    supply: item?.supply,
    sold: item?.sold,
    price: item?.price,
  };

  const [updatedProduct, setUpdatedProduct] = useState(defaultProduct);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await updateProduct(updatedProduct);

    if (res?.data?.data?.modifiedCount) {
      alert("Successfully Modified");
      setOpenProductModal(false);
    }
  };
  const deleteProduct = async () => {
    setOpenModal(false);
    const res = await removeProduct(productId).unwrap();
    if (res?.data?.deletedCount) {
      alert("Product Has been removed.");
    } else {
      alert("Something went wrong.");
    }
  };
  const onCloseModal = () => {
    setOpenModal(false);
    setOpenProductModal(false);
  };
  const products = data?.data;
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }
  return (
    <>
      <Modal show={openProductModal} size="xxl" onClose={onCloseModal} popup>
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
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          title: e.target.value,
                        })
                      }
                      defaultValue={item?.title ? item?.title : ""}
                      required
                      type="text"
                      className="w-full text-slate-500 font-bold rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="" className="text-sm">
                      Category
                    </label>
                    <input
                      required
                      defaultValue={item?.category ? item?.category : ""}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          category: e.target.value,
                        })
                      }
                      type="text"
                      className="w-full text-slate-500 font-bold rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="" className="text-sm">
                      Quantity
                    </label>
                    <input
                      required
                      defaultValue={item?.quantity ? item?.quantity : ""}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          quantity: parseInt(e.target.value),
                        })
                      }
                      type="number"
                      className="text-slate-500 font-bold w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="" className="text-sm">
                      Supply Item Image URL
                    </label>
                    <input
                      defaultValue={item?.imageURL ? item?.imageURL : ""}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          imageURL: e.target.value,
                        })
                      }
                      required
                      type="text"
                      placeholder=""
                      className="w-full text-slate-500 font-bold rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="" className="text-sm">
                      Supply Item Descripton
                    </label>
                    <input
                      defaultValue={item?.description ? item?.description : ""}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          description: e.target.value,
                        })
                      }
                      required
                      type="text"
                      placeholder=""
                      className="w-full text-slate-500 font-bold rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="" className="text-sm">
                      Price
                    </label>
                    <input
                      defaultValue={item?.price ? item?.price : ""}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          price: parseInt(e.target.value),
                        })
                      }
                      required
                      type="number"
                      placeholder=""
                      className="w-full text-slate-500 font-bold rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="" className="text-sm">
                      Supply Number
                    </label>
                    <input
                      defaultValue={item?.supply ? item?.supply : ""}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          supply: parseInt(e.target.value),
                        })
                      }
                      required
                      type="number"
                      placeholder=""
                      className="w-full text-slate-500 font-bold rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="" className="text-sm">
                      Items Sold
                    </label>
                    <input
                      defaultValue={item?.sold ? item?.sold : ""}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          sold: parseInt(e.target.value),
                        })
                      }
                      required
                      type="number"
                      placeholder=""
                      className="w-full text-slate-500 font-bold rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
                    className="w-full rounded-md col-span-full border px-2 py-2 text-xl font-bold hover:bg-slate-500 hover:text-stone-300"
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

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="green" onClick={() => deleteProduct()}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="container bg-[#001529] p-2 mx-auto sm:p-4 text-gray-800 rounded-lg">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-white">
          Product Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-white">
            <thead className="bg-gray-300 text-black">
              <tr className="text-left">
                <th className="p-3">SL</th>
                <th className="p-3">Product Image</th>
                <th className="p-3">Product Title</th>
                <th className="p-3">Donor Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Quantity</th>
                <th className="p-3 text-center">Product Id</th>
                <th className="p-3 text-right">Supply/Sold</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product: IProduct, idx: number) => (
                <tr
                  key={product?._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-slate-600"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <img
                      src={product?.imageURL}
                      alt="image"
                      width={40}
                      height={40}
                    />
                  </td>
                  <td className="p-3">
                    <p>{product?.title}</p>
                  </td>

                  <td className="p-3 flex items-center gap-x-2">
                    <img
                      src={product?.donorImageURL}
                      alt="image"
                      width={40}
                      height={40}
                    />
                    <p>{product?.donorName}</p>
                  </td>
                  <td className="p-3">
                    <p>{product?.category}</p>
                  </td>
                  <td className="p-3">
                    <p>{product?.quantity}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{product?._id}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:text-gray-50">
                      <span className="border px-2">{product?.supply}</span>
                      <span className="border px-2">{product?.sold}</span>
                    </span>
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() => {
                        setItem(product);
                        setUpdatedProduct(product);
                        setOpenProductModal(true);
                      }}
                      className="border mr-2 px-2 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setProductId({ id: product?._id });
                        setOpenModal(true);
                      }}
                      className="border px-2 me-2 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllSuppliies;
