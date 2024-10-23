import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MedicalTreatmentModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h3 className="text-xl mb-4">Add Medical Treatment</h3>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label>Date</label>
              <input type="date" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label>Heart Rate</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Heart Rate"
              />
            </div>
            <div>
              <label>Blood Pressure</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Blood Pressure"
              />
            </div>
            <div>
              <label>Body Temperature (F)</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Temperature"
              />
            </div>
            <div>
              <label>Glucose Level</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Glucose Level"
              />
            </div>
            <div>
              <label>Height (cm)</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Height"
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Weight"
              />
            </div>
            <div>
              <label>New Treatment</label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="New Treatment"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center mb-4">
            <input type="checkbox" id="didNotCome" />
            <label htmlFor="didNotCome">Patient did not come</label>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-primary text-white rounded"
              onClick={() => {
                onClose();
              }}
            >
              Confirm
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicalTreatmentModal;
