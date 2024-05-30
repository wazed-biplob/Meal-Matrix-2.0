import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/api/baseApi";
import { IProduct } from "../redux/feature/productSlice";

"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AllSuppliies = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [productId, setProductId] = useState({ id: "" });
  const [removeProduct] = useDeleteProductMutation();
  const deleteProduct = async () => {
    setOpenModal(false);
    const res = await removeProduct(productId).unwrap();
    if (res?.data?.deletedCount) {
      alert("Product Has been removed.");
    } else {
      alert("Something went wrong.");
    }
  };

  const products = data?.data;
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }
  return (
    <>
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
      <div className="container bg-[#001529] p-2 mx-auto sm:p-4 dark:text-gray-800 rounded-lg">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-white">
          Product Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-white">
            <thead className="dark:bg-gray-300">
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
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
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
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <span className="border px-2">{product?.supply}</span>
                      <span className="border px-2">{product?.sold}</span>
                    </span>
                  </td>
                  <td className="text-right">
                    <button className="border mr-2 px-2 py-1 rounded-md">
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setOpenModal(true);
                        setProductId({ id: product?._id });
                      }}
                      className="border px-2 py-1 rounded-md"
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
