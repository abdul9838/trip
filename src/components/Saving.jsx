import React from "react";

const Saving = ({ value }) => {
  const { type, saving, subtype, id, setSaving } = value;
  return (
    <div
      onClick={() => setSaving(id)}
      className={`border cursor-pointer flex gap-2 px-3 py-2 rounded-lg ${
        saving === id ? "border-blue-300 bg-sky-100" : ""
      }`}
    >
      <div>
        <input
          type="radio"
          checked={saving === id}
          onChange={() => setSaving(id)}
          name="saving"
          id={`saving${id}`}
        />
      </div>
      <div>
        <label htmlFor={`saving${id}`}>{type}</label>
        <p className="text-xs text-gray-500">{subtype}</p>
      </div>
    </div>
  );
};

export default Saving;
