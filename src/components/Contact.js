"use client"

import style from '@/app/projects.module.css'
import { useState } from 'react'

export default function Contact() {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('api/contact', {
            method: 'POST',
            body: JSON.stringify(message)
        })

        const data = await response.json()

        if(data.result == "Success"){
            alert("Successfully submitted the message!")
        }else{
            alert("Something went wrong!")
        }
    }
    return (
        <section className="contact_section layout_padding" id="contact">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2 className={`${style.text}`}>Get In touch</h2>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-7 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="contact_form-container">
                                    <div>
                                        <div>
                                            <input value={message.name} onChange={(e) => setMessage({...message, name:e.target.value})} style={{border: "1px solid black", borderRadius: '10px'}} type="text" placeholder="Full Name" />
                                        </div>
                                        <div>
                                            <input value={message.email} onChange={(e) => setMessage({...message, email:e.target.value})} style={{border: "1px solid black", borderRadius: '10px'}} type="email" placeholder="Email " />
                                        </div>
                                        <div>
                                            <input value={message.phoneNumber} onChange={(e) => setMessage({...message, phoneNumber:e.target.value})} style={{border: "1px solid black", borderRadius: '10px'}} className={`${style.input}`} type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="">
                                            <input
                                                value={message.message} onChange={(e) => setMessage({...message, message:e.target.value})}
                                                style={{border: "1px solid black", borderRadius: '10px'}}
                                                className={`message_input`}
                                                type="text"
                                                placeholder="Message"
                                                
                                            />
                                        </div>
                                        <div className="btn-box">
                                            <button type="submit">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}