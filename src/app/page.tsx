import OutpatientTable from "./components/OutpatientTable";
import PatientSummary from "./components/PatientSummary";

export default function Dashboard() {
  return (
   <div className=" bg-white">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <PatientSummary/>
      <OutpatientTable/>
   </div>
  );
}
