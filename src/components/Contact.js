import style from '@/app/projects.module.css'

export default function Contact() {
    return (
        <section className="contact_section layout_padding" id="contact">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2 className={`${style.text}`}>Get In touch</h2>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-7 mx-auto">
                            <form action="#">
                                <div className="contact_form-container">
                                    <div>
                                        <div>
                                            <input style={{border: "1px solid black", borderRadius: '10px'}} type="text" placeholder="Full Name" />
                                        </div>
                                        <div>
                                            <input style={{border: "1px solid black", borderRadius: '10px'}} type="email" placeholder="Email " />
                                        </div>
                                        <div>
                                            <input style={{border: "1px solid black", borderRadius: '10px'}} className={`${style.input}`} type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="">
                                            <input
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