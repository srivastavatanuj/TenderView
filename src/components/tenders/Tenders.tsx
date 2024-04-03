import MainTable from "./components/MainTable";
import Sidebar from "./components/Sidebar";

const Tenders = () => {
  return (
    <div className="flex">
      <div className="bg-blue-900 min-h-screen relative min-w-[250px] h-auto hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full px-2 md:px-4">
        <MainTable />
      </div>
    </div>
  );
};

export default Tenders;
