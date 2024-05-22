'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FormUser: React.FC = () => {
    const [FirstName, setFirstName] = useState<string>("");
    const [LastName, setLastName] = useState<string>("");
    const [Age, setAge] = useState<number>(); // Changed from string to number
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!FirstName || !LastName || !Age) {
            alert("الحقول ناقصة او غير موجودة ");
            return;
        }

        try {
            const res = await fetch("/api/User", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ FirstName, LastName, Age }),
            });

            if (res.ok) {
                router.push("/Users");
            } else {
                throw new Error("Failed to create a post");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="FirstName"
                value={FirstName}
                className='text-black'
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <textarea
                placeholder="LastName"
                value={LastName}
                className='text-black'
                onChange={(e) => setLastName(e.target.value)}
            ></textarea>
            <br />
            <input
                type="number"
                placeholder="Age "
                value={Age}
                className='text-black'
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <br />
            <button type="submit">Add User</button>
        </form>
    );
};

export default FormUser;
