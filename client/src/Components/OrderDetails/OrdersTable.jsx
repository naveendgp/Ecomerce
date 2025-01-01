const ProductTable = ({ response }) => {
  return (
    <section className="min-h-full w-full rounded-md">
      <div className="bg-[#1F272F] p-4 rounded-md">
        <table className="w-full rounded-md">
          <thead className="w-full justify-evenly bg-gray-700">
            <tr className="text-white text-center">
              <th className=" p-2 rounded-l-md">Product Name</th>
              <th className=" p-2">category</th>
              <th className=" p-2">Price</th>
              <th className=" p-2">Qty</th>
              <th className=" p-2">User Name</th>
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
                  <td className="p-0 truncate max-w-[200px]">
                    {product.BookTitle}
                  </td>
                  <td className="p-2">{product.category}</td>
                  <td className="p-2">${product.Price}</td>
                  <td className="p-1 w-[50px]">{product.quantity}</td>
                  <td className="p-2">{product.address.firstName} {product.address.lastName}</td>
                  <td className="p-4 truncate max-w-[200px]">
                  {product.address.streetAddress} {product.address.landmark} {product.address.pincode}                 </td>
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
