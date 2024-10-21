"use client"
import React from 'react'
import TreatmentStatus from './TreatmentStatus'
import { useOutpatientTable } from '../contexts/OutpatientTableContext';
import { Patient } from '@/types/patientTypes';

const patients: Patient[] = [
    {
      id: 10234,
      name: "Jane Cooper",
      contact: "(225) 555-0118",
      email: "jane@gmail.com",
      diagnosis: "Diabetes",
      treated: true,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
    {
      id: 10235,
      name: "Floyd Miles",
      contact: "(205) 555-0100",
      email: "floyd@gmail.com",
      diagnosis: "Hypertension",
      treated: false,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
    {
      id: 10236,
      name: "Ronald Richards",
      contact: "(302) 555-0107",
      email: "ronald@gmail.com",
      diagnosis: "High Blood Pressure",
      treated: true,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
    {
      id: 10237,
      name: "Marvin McKinney",
      contact: "(252) 555-0126",
      email: "marvin@gmail.com",
      diagnosis: "Obesity",
      treated: false,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
    {
      id: 10238,
      name: "Jerome",
      contact: "(629) 555-0129",
      email: "jerome@gmail.com",
      diagnosis: "CVD Risk",
      treated: true,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
    {
      id: 10239,
      name: "Kathryn Murphy",
      contact: "(406) 555-0120",
      email: "kathryn@gmail.com",
      diagnosis: "Kidney Disease",
      treated: true,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
    {
      id: 10240,
      name: "Jacob Robby",
      contact: "(208) 555-0112",
      email: "jacob@gmail.com",
      diagnosis: "Diabetes",
      treated: false,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
    {
      id: 10241,
      name: "Kristin Watson",
      contact: "(704) 555-0127",
      email: "kristin@gmail.com",
      diagnosis: "Obesity",
      treated: false,
      age: 0,
      gender: '',
      bloodType: '',
      address: ''
    },
  ];

const TableBody = () => {
    const { tableRef } = useOutpatientTable();
  return (
    <div ref={tableRef}>
        <table className="w-full text-left border-collapse text-black my-4">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Patient ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Phone Number</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Diagnosis</th>
              <th className="py-2 px-4">Treatment</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b">
                <td className="py-2 px-4">{patient.id}</td>
                <td className="py-2 px-4">{patient.name}</td>
                <td className="py-2 px-4">{patient.contact}</td>
                <td className="py-2 px-4">{patient.email}</td>
                <td className="py-2 px-4">{patient.diagnosis}</td>
                <td className="py-2 px-4">
                  <TreatmentStatus />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default TableBody