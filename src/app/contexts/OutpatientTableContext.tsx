"use client";
import { OutpatientTableTypes } from "@/types/patientTypes";
import React, { createContext, useContext, useRef, useState } from "react";

const OutpatientTableContext = createContext<OutpatientTableTypes | undefined>(
  undefined
);

export const OutpatientTableProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // table header
  // Print Data
  const handlePrint = () => {
    if (tableRef.current) {
      const originalContent = document.body.innerHTML;
      const printContent = tableRef.current.innerHTML;

      document.body.innerHTML = printContent;
      window.print();

      document.body.innerHTML = originalContent;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  // table body
  const tableRef = useRef<HTMLDivElement>(null);

  // table footer
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };
  return (
    <OutpatientTableContext.Provider
      value={{
        tableRef,
        handlePrint,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange,
        openModal,
        closeModal,
        isModalOpen
      }}
    >
      {children}
    </OutpatientTableContext.Provider>
  );
};

export const useOutpatientTable = () => {
  const context = useContext(OutpatientTableContext);
  if (context === undefined) {
    throw new Error();
  }
  return context;
};
