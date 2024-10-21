"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { DropdownPatient } from "@/types/patientTypes";

const stats: DropdownPatient[] = [
  { title: "Total Outpatients" },
  { title: "Treated Outpatients" },
  { title: "Untreated Outpatients" },
];

const Dropdownbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(stats[0].title); 

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (title: string) => {
    setSelectedTitle(title);
    setIsOpen(false); 
  };

  return (
    <div className="relative w-[180px]">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full bg-white px-4 py-2 rounded-lg border"
      >
        <span className="text-sm text-slate-500">{selectedTitle}</span>
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => handleSelect(stat.title)} 
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <p className="text-sm text-gray-400">{stat.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdownbar;
