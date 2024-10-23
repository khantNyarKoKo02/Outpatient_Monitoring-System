"use client";
import PatientProfile from "@/app/components/PatientProfile";
import PersonalInformation from "@/app/components/PersonalInformation";
import React from "react";

const Patients: React.FC = () => {
  return (
    <div className="bg-slate-200 overflow-y-scroll px-10 h-screen text-black">
      <h2 className="text-3xl py-5">Patient Information</h2>
      <div className="flex w-full justify-between items-center gap-8">
        <PersonalInformation />
        <PatientProfile />
      </div>
    </div>
  );
};

export default Patients;
