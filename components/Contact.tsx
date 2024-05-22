'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Contact: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !phone || !message) {
            alert("الحقول ناقصة او غير موجودة ");
            return;
        }

        try {
            const res = await fetch("/api/Contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, message }),
            });

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to create a post");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="py-16 lg:section lg:mt-40 px-6" id="contact">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        {/* text */}
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <h4 className="text-xl text-accent uppercase font-medium mb-2 tracking-wide">
                            تواصل معنا

                            </h4>
                            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                       </h2>
                        </div>
                        {/* form */}
                        <form onSubmit={handleSubmit} className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start form">
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                name='name'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                                type="text"
                                placeholder="Your Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <textarea
                                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none"
                                placeholder="Your Message"
                                value={message}
                                name='message'
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button className="btn btn-lg" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
