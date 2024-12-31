import Sidenav from "../../Components/SideNavigation/Sidenav";
import ProductTable from "../../Components/ProductDetails/ProductTable";
const AdminDashbaord = () => {
  return (
    <section className="flex bg-[#161B21] h-screen">
      <Sidenav />

      <div className="flex flex-col w-full m-12">
        <h1 className="text-white text-3xl">Products</h1>
        <div className="mt-10">
          <ProductTable />
        </div>
      </div>
    </section>
  );
};

export default AdminDashbaord;
