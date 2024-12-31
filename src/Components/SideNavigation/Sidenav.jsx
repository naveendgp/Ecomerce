const Sidenav = () => {
  return (
    <>
      <section className="flex px-10 flex-col bg-[#1F272F] text-white h-screen w-64  items-center justify-start   ">
        <h1 className="mt-10 text-4xl text-white">Dashboard</h1>
        <ul className="mt-10 text-xl space-y-3">
          <li>Products</li>
          <li>Orders</li>
        </ul>
      </section>
    </>
  );
};

export default Sidenav;
