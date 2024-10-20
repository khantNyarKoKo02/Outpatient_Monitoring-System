import OutpatientTable from "./components/OutpatientTable";
import PatientSummary from "./components/PatientSummary";

export default function Dashboard() {
  return (
   <div className=" bg-slate-200 overflow-y-scroll px-10">
      <h1 className="text-3xl font-semibold my-8 text-black">Dashboard</h1>
      <PatientSummary/>
      <OutpatientTable/>
   </div>
  );
}
