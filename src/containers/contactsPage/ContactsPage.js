import React, { useState } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!checkDuplicate(name)) {
      addContact(name, phone, email);

      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert('name is already exists');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  function checkDuplicate(username) {
    const duplicateName = contacts.find(
      (contact) => contact.name.toLowerCase() === username.toLocaleLowerCase()
    );
    return duplicateName;
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList listdata={contacts} />
      </section>
    </div>
  );
};
