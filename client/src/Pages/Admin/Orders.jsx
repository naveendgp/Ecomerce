import Sidenav from "../../Components/SideNavigation/Sidenav"
import OrdersTable from "../../Components/OrderDetails/OrdersTable"

const Orders = () => {



    return (
      <section className="flex bg-[#161B21] h-screen">
        <Sidenav />

        <div className="flex flex-col w-full m-12">
          <h1 className="text-white text-3xl">Orders Page</h1>

          <div className="mt-10">
            <OrdersTable />
          </div>
        </div>
      </section>
    );
}

export default Orders