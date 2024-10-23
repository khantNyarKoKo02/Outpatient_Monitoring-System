"use client";
import MedicalTreatementTable from "@/app/components/MedicalTreatementTable";
import PatientProfile from "@/app/components/PatientProfile";
import PersonalInformation from "@/app/components/PersonalInformation";
import React from "react";
import { TiPlus } from "react-icons/ti";

const Patients: React.FC = () => {
  return (
    <div className="bg-slate-200 overflow-y-scroll px-10 h-screen text-black">
      <h2 className="text-3xl py-5">Patient Information</h2>
      <div className="flex w-full justify-between items-center gap-8">
        <PersonalInformation />
        <PatientProfile />
      </div>
      <div className=" flex gap-3 py-5 items-center">
        <h3 className="text-2xl">Medical Treatment</h3>
        <button className=" px-3 py-1 rounded border border-primary text-primary flex gap-2 items-center">
          <span>Add</span>
          <TiPlus />
        </button>
      </div>
      <MedicalTreatementTable/>
    </div>
  );
};

export default Patients;
