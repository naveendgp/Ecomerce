import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <section className="flex px-10 flex-col bg-[#1F272F] text-white h-screen w-64  items-center justify-start   ">
        <h1 className="mt-10 text-4xl text-white">Dashboard</h1>
        <ul className="mt-10 text-xl space-y-3">
          <Link to="/admin/dashboard"><li>Products</li></Link>
          <Link to="/admin/orders"><li>Orders</li> </Link>
        </ul>
      </section>
    </>
  );
};

export default Sidenav;
