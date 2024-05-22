'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/app/Dashbord1/layout';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('/api/Contact');
        if (!res.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await res.json();
        setContacts(data.Contacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/Contact/?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete contact');
      }
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
      <Layout>
      <h1 className="text-2xl font-semibold mb-4">قائمة الاتصال</h1>
<div className="overflow-x-auto">
  <table className="table-auto border-collapse border border-gray-300 w-full rounded ">
    <thead>
      <tr className="bg-sky-800 rounded">
        <th className="border border-gray-300 px-4 py-2">الاسم</th>
        <th className="border border-gray-300 px-4 py-2">البريد الإلكتروني</th>
        <th className="border border-gray-300 px-4 py-2">رقم الهاتف</th>
        <th className="border border-gray-300 px-4 py-2">تعديل</th>
        <th className="border border-gray-300 px-4 py-2">حذف</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map(contact => (
        <tr key={contact._id} className="text-sm">
          <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
          <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
          <td className="border border-gray-300 px-4 py-2">{contact.phone}</td>
          <td className="border border-gray-300 px-4 py-2">
            <Link href={`/api/Contact/${contact._id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">تعديل</button>
            </Link>
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <button onClick={() => handleDelete(contact._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">حذف</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </Layout>
    </div>
  );
};

export default ContactList;
