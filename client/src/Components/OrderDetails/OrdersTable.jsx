const ProductTable = ({ response }) => {
  return (
    <section className="min-h-full w-full rounded-md">
      <div className="bg-[#1F272F] p-4 rounded-md">
        <table className="w-full rounded-md">
          <thead className="w-full justify-evenly bg-gray-700">
            <tr className="text-white text-center">
              <th className="p-2 rounded-l-md" scope="col">
                Product Name
              </th>
              <th className="p-2" scope="col">
                Category
              </th>
              <th className="p-2" scope="col">
                Price
              </th>
              <th className="p-2" scope="col">
                Qty
              </th>
              <th className="p-2" scope="col">
                User Name
              </th>
              <th className="p-2 rounded-tr-md rounded-r-md" scope="col">
                Address
              </th>
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
                    {product.BookTitle || "N/A"}
                  </td>
                  <td className="p-2">{product.category || "N/A"}</td>
                  <td className="p-2">${product.Price || "0.00"}</td>
                  <td className="p-1 w-[50px]">{product.quantity || 0}</td>
                  <td className="p-2">
                    {product.address?.firstName || "First Name"}{" "}
                    {product.address?.lastName || "Last Name"}
                  </td>
                  <td className="p-4 truncate max-w-[200px]">
                    {product.address?.streetAddress || "Street"}{" "}
                    {product.address?.landmark || ""}{" "}
                    {product.address?.pincode || "Pincode"}
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