
const PopupCard = ({cancel}) => {

    return (
      <>
        <section className="border flex border-gray-200 outline-none rounded-md w-[40vw] h-[60vh] bg-white">
          <div className="m-10 w-full flex flex-col items-center">
            <h1 className="text-center text-3xl ">Add Address</h1>
            <div className="flex justify-between w-[28.5vw] mt-5">
              <label>
                <h1>First Name</h1>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-slate-300 outline-none rounded-sm p-2 focus:ring-1 focus:ring-blue-700"
                />
              </label>
              <label>
                <h1>Last Name</h1>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-slate-300 rounded-sm outline-none p-2 focus:ring-1 focus:ring-blue-700"
                />
              </label>
            </div>

            <label className="mt-4">
              <h1>Street Address</h1>
              <input
                type="text"
                placeholder="Street Address"
                className="border border-slate-300 rounded-sm outline-none p-2 w-[28.5vw] focus:ring-1 focus:ring-blue-700"
              />
            </label>

            <div className="flex mt-4">
              <label className="flex flex-col">
                LandMark
                <input
                  type="text"
                  placeholder="Landmark"
                  className="border border-slate-300 rounded-sm outline-none p-2 focus:ring-1 focus:ring-blue-700"
                />
              </label>
              <label className="flex flex-col ml-4">
                Pincode
                <input
                  type="text"
                  placeholder="Pincode"
                  className="border border-slate-300 rounded-sm outline-none p-2 focus:ring-1 focus:ring-blue-700"
                />
              </label>
            </div>

            <div className="w-[28.5vw] mt-8">
              <button className="p-[10px] bg-blue-900 text-white rounded-sm">
                Use this address
              </button>
              <button
                className="ml-6 border border-blue-900 py-2 px-6 rounded-sm"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      </>
    );
}

export default PopupCard