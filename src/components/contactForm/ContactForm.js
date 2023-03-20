import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        value={phone}
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
        pattern="^(?:\+?420)?[\s]?(\d{3})[\s]?(\d{3})[\s]?(\d{3})$"
        required
      />
      <input
        type="email"
        value={email}
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Add Contact</button>
    </form>
  );
};
