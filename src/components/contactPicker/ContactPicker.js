import React from 'react';

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <>
      <label htmlFor="contactPicker">Appointment with:</label>
      <select
        name="contactPicker"
        id="contactPicker"
        onChange={(e) => onChange(e)}
      >
        <option value={''} key="-1">
          No contact selected
        </option>
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
