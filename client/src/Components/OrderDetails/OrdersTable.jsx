const ProductTable = ({ response }) => {
  return (
    <section className="min-h-full w-full rounded-md">
      <div className="bg-[#1F272F] p-4 rounded-md">
        <table className="w-full rounded-md">
          <thead className="w-full justify-evenly bg-gray-700">
            <tr className="text-white text-center">
              <th className=" p-2 rounded-l-md">Product Name</th>
              <th className=" p-2">Price</th>
              <th className=" p-2">Quantity</th>
              <th className=" p-2">User Name</th>
              <th className=" p-2">User Contact</th>
              <th className=" p-2 rounded-tr-md rounded-r-md">Address</th>
            </tr>
          </thead>
          <tbody>
            {response && response.length > 0 ? (
              response.map((product, index) => (
                <tr
                  key={index}
                  className="text-white text-center mt-10 border-b border-gray-700"
                >
                  <td className="p-4 truncate max-w-[200px]">
                    {product.BookTitle}
                  </td>
                  <td className="p-2">${product.Price}</td>
                  <td className="p-2">{product.Quantity}</td>
                  <td className="p-2">{product.UserName}</td>
                  <td className="p-2">{product.UserContact}</td>
                  <td className="p-4 truncate max-w-[200px]">
                    {product.UserAddress}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-white text-center">
                <td colSpan="6" className="p-4">
                  No Orders Yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductTable;
