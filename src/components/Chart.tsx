import { Pie, PieChart } from "recharts";
import { useGetProductsQuery } from "../redux/api/baseApi";
import { IProduct } from "../redux/feature/productSlice";

const Chart = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  // Define colors for each section
  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#00C49F",
    "#FFBB28",
  ];

  // Map data for supply
  const data01 = data?.data?.map((product: IProduct, index: number) => ({
    name: product?.title,
    value: product?.supply,
    color: COLORS[index % COLORS.length], // Assign color based on index
  }));

  // Map data for sold
  const data02 = data?.data?.map((product: IProduct, index: number) => ({
    name: product?.title,
    value: product?.sold,
    color: COLORS[index % COLORS.length], // Assign color based on index
  }));

  // Extract unique product names
  const productNames = data?.data?.map((product: IProduct) => product?.title);
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="text-white text-sm">
        <div className="flex justify-center items-center gap-x-2">
          <div className="bg-[#8884D8] rounded-full w-[10px] h-[10px]"></div>
          <p>Product Supply</p>
        </div>

        <div className="flex justify-center items-center gap-x-2">
          <div className="bg-[#82CA9D] rounded-full w-[10px] h-[10px] "></div>
          <p>Product sold</p>
        </div>
      </div>

      <PieChart width={730} height={450}>
        {/* Pie for supply */}
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          label
        ></Pie>

        {/* Pie for sold */}
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={120}
          fill="#82ca9d"
          label
        ></Pie>
      </PieChart>

      {/* Legend */}
      <div style={{ marginTop: "20px" }}>
        {productNames?.map((name: string, index: number) => (
          <div
            key={`legend-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: "5px",
              }}
            ></div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
