import Card from "../components/Card";
import Loader from "../components/Loader";
import SectionContainer from "../components/SectionContainer";
import SectionHeading from "../components/SectionHeading";
import { useGetProductsQuery } from "../redux/api/baseApi";
import { IProduct } from "../types/types";

const Supplies = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data;
  if (isLoading) return <Loader />;

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
