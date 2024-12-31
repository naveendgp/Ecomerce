const ProductTable = () => {
  return (
    <>
      <section className="min-h-full w-fit rounded-md">
        <div className="bg-[#1F272F] p-4 rounded-md">
          <table className="w-[60vw] rounded-md ">
            <thead
              className=" w-full justify-evenly  bg-gray-700"
              style={{ borderRadius: "10px" }}
            >
              <tr className="text-white text-center">
                <th className="w-1/4 p-2 rounded-l-md">Product Name</th>{" "}
                {/* Top-left border radius */}
                <th className="w-1/4 p-2">Price</th>
                <th className="w-1/4 p-2">Quantity</th>
                <th className="w-1/4 p-2 rounded-tr-md rounded-r-md">
                  Category
                </th>{" "}
                {/* Top-right border radius */}
              </tr>
            </thead>
            <tbody>
              <tr className="text-white text-center mt-10 border-b border-gray-700">
                <td className="p-4">Product 1</td>
                <td className="p-2">$10.00</td>
                <td className="p-2">5</td>
                <td className="p-2">Electronics</td>
              </tr>
              <tr className="text-white text-center border-b border-gray-700">
                <td className="p-4">Product 2</td>
                <td className="p-2">$15.00</td>
                <td className="p-2">3</td>
                <td className="p-2">Books</td>
              </tr>
              <tr className="text-white text-center border-b border-gray-700">
                <td className="p-4 truncate max-w-[200px]">
                  Product 3 Product 3 Product 3 Product 3 Product 3 Product 3
                  Product 3 Product 3 Product 3 Product 3 Product 3 Product 3
                </td>
                <td className="p-2">$25.00</td>
                <td className="p-2">2</td>
                <td className="p-2">Clothing</td>
              </tr>
              <tr className="text-white text-center ">
                <td className="p-4">Product 3</td>
                <td className="p-2">$25.00</td>
                <td className="p-2">2</td>
                <td className="p-2">Clothing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ProductTable;
