import Sidenav from "../../Components/SideNavigation/Sidenav";

const AddProduct = () => {
  return (
    <section className="flex bg-[#161B21] h-screen">
      <Sidenav />

      <div className="flex flex-col w-full m-12">
        <h1 className="text-white text-3xl">Add Product</h1>

        <section className="flex justify-between mt-8">
          <div className="bg-gray-800 w-[60%] rounded-md p-4 h-[80vh] overflow-y-auto">
            {" "}
            {/* Added overflow-y-auto */}
            <h1 className="text-white text-2xl m-3 text-center">
              Base Information
            </h1>
            <h1 className="text-white text-xl mt-10 ml-3">Book Title</h1>
            <input
              type="text"
              placeholder="Book Title..."
              className="w-96 m-4 p-2 border border-gray-500 rounded-md bg-zinc-700 outline-none text-gray-200"
            />
            <h1 className="text-white text-xl ml-3">Author Name</h1>
            <input
              type="text"
              placeholder="Author Name..."
              className="w-96 m-4 p-2 border border-gray-500 rounded-md bg-zinc-700 outline-none text-gray-200"
            />
            <h1 className="text-white text-xl ml-3">Book Price</h1>
            <input
              type="text"
              placeholder="Book Price..."
              className="w-96 m-4 p-2 border border-gray-500 rounded-md bg-zinc-700 outline-none text-gray-200"
            />
            <h1 className="text-white text-xl ml-3">Book Quantity</h1>
            <input
              type="text"
              placeholder="Book Quantity..."
              className="w-96 m-4 p-2 border border-gray-500 rounded-md bg-zinc-700 outline-none text-gray-200"
            />
            <h1 className="text-white text-xl ml-3">Description</h1>
            <textarea
              type="text"
              rows="3"
              style={{
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
              placeholder="Book Description..."
              className="w-96 m-4 p-2 rounded-md border border-gray-500 resize-none bg-zinc-700 outline-none text-gray-200"
            />
            <button className="text-white py-2 px-3 bg-gray-700 rounded-md ">
              Add Product
            </button>
          </div>
          <div className="bg-black-800">hello</div>
        </section>
      </div>
    </section>
  );
};

export default AddProduct;
