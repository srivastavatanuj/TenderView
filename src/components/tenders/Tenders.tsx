import MainTable from "./components/MainTable";
import Sidebar from "./components/Sidebar";
import data from "../../../../etender_20240403063512.json";

const Tenders = () => {
  return (
    <div className="flex">
      <div className="bg-[#3ca0af] min-h-screen relative min-w-[250px] h-auto hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full px-2 md:px-4 bg-white">
        <MainTable data={data} />
      </div>
    </div>
  );
};

export default Tenders;
