import './contact.css';
import React from 'react';
export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "33d37e74-ee91-41bf-8dd8-a08a2df538ae");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <div className="contact " id='contact'>
                <div className="contact-col">
                    <h3>Send us a message </h3>
                    <p>Have questions about our computer courses, products, or services?
                        We're here to help! Just fill out the form and our team will get back to you as soon as possible.
                    </p>
                    <ul>
                        <li>✉️Email: slnsoft-tech@gmail.com</li>
                        <br />
                        <li>📍Premium Honda showroom opposite <br />Amarapuram-515281</li>
                    </ul>

                </div>
                <div className="contact-col contactform">
                    <form action="" onSubmit={onSubmit}>
                        <label>Your Name : </label>
                        <input type="text" name='name' placeholder='Enter Your Name' required />
                        <label>Phone:</label>
                        <input type="tel" name='phone' placeholder='Enter Your Phone No' required />
                        <label >Write Your Meassage Here:</label>
                        <textarea name="meassage" placeholder='Enter Your Message' required rows='6'></textarea>
                        <button className='btn dark-btn'>Submit now</button>
                    </form>
                    <span>{result}</span>

                </div>

            </div>
        </>
    )
}
