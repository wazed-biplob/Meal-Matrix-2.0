import { useState } from "react";
import { usePostProductMutation } from "../redux/api/baseApi";

import { useNavigate } from "react-router-dom";

const CreateSupply = () => {
  const supplyProduct = {
    title: "",
    imageURL: "",
    category: "",
    description: null,
    quantity: 0,
    review: 10,
    rating: 4.5,
    donorName: "",
    donorImageURL: "",
    supply: 10,
    sold: 0,
    price: 0,
  };
  const [supply, setSupply] = useState(supplyProduct);
  const [postProduct] = usePostProductMutation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await postProduct(supply);
    if (res?.data?.data) {
      navigate(`/supplies`);
    }
  };
  return (
    <div>
      <section className="p-6 text-[lightgrey] dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Supply Item Information</p>
              <p className="text-xs">
                Provide with all the necessary supply items information.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="" className="text-sm">
                  Product Title
                </label>
                <input
                  required
                  onChange={(e) =>
                    setSupply({ ...supply, title: e.target.value })
                  }
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
                  onChange={(e) =>
                    setSupply({ ...supply, category: e.target.value })
                  }
                  type="text"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="" className="text-sm">
                  Quantity
                </label>
                <input
                  required
                  onChange={(e) =>
                    setSupply({ ...supply, quantity: parseInt(e.target.value) })
                  }
                  type="number"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="" className="text-sm">
                  Supply Item Image URL
                </label>
                <input
                  required
                  onChange={(e) =>
                    setSupply({ ...supply, imageURL: e.target.value })
                  }
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
                  required
                  onChange={(e) =>
                    setSupply({ ...supply, price: parseInt(e.target.value) })
                  }
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
                Provide with the necessay Donor Informaton
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="" className="text-sm">
                  Donor Name
                </label>
                <input
                  required
                  onChange={(e) =>
                    setSupply({ ...supply, donorName: e.target.value })
                  }
                  type="text"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Website
                </label>
                <input
                  disabled
                  id="website"
                  type="text"
                  className="w-full bg-slate-400 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="" className="text-sm">
                  Donor Image URL
                </label>
                <input
                  required
                  onChange={(e) =>
                    setSupply({ ...supply, donorImageURL: e.target.value })
                  }
                  placeholder=""
                  className="w-full py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
    </div>
  );
};

export default CreateSupply;
