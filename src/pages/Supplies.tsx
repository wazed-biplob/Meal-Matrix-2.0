import Card from "../components/Card";
import SectionContainer from "../components/SectionContainer";
import SectionHeading from "../components/SectionHeading";
import { useGetProductsQuery } from "../redux/api/baseApi";
import { IProduct } from "../redux/feature/productSlice";

const Supplies = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data;

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-sky-600"></div>
          <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] border rounded-full border-sky-600 absolute"></div>
        </div>
      </div>
    );
  }
  return (
    <SectionContainer>
      <SectionHeading subtitle="Join us in a celebration of food that’s both delightful and unforgettable. Taste the difference in every product, crafted to bring joy and satisfaction to your table.">
        All Supply Products
      </SectionHeading>
      <div className="grid grid-cols-3 gap-x-2 gap-y-4 justify-items-center py-4">
        {products?.map((product: IProduct) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Supplies;
