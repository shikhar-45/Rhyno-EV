import React, { useState } from 'react'
import axios from 'axios'
import { Element } from 'react-scroll'
import './Form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        model: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('#', formData)
            alert('Booking successful')
        } catch (error) {
            console.error('Error booking', error)
            alert('Booking failed')
        }
    }

    return (
        <section>
            <Element name='preBookForm'>
                <h1>Pre book now</h1>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div>
                                <label>Name:</label>
                                <input type='text' name='name' value={formData.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Phone Number:</label>
                                <input type='text' name='phone' value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Model:</label>
                                <input type='text' name='model' value={formData.model} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Card Number:</label>
                                <input type='text' name='cardNumber' value={formData.cardNumber} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Expiry Date:</label>
                                <input type='date' name='expiryDate' value={formData.expiryDate} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>CVV:</label>
                                <input type='text' name='cvv' value={formData.cvv} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="btn" type="submit" id="pre-book-button">Submit</div>
                    </form>
                </div>
            </Element>
        </section>
    )
}

export default Form
