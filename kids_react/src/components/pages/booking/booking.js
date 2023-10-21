import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PaypalCheckoutButton from './PaypalCheckoutButton';
import Swal from 'sweetalert2';

const Booking = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    sessionStorage.setItem('current', window.location.pathname);
  }, []);
  const { id } = useParams(); // Assuming 'id' is the category ID

  const [data, setData] = useState([]);
  const [Price, setPrice] = useState([]);
  const user=sessionStorage.getItem('user_id');

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/EventDetails/${id}`)
      .then((response) => {
        setData(response.data);
        setPrice(parseInt(response.data.price));
        setFormData(prevFormData => ({
          ...prevFormData,
          Total_price: parseInt(response.data.price), // Update Total_price after data is fetched
        }));
      });
  }, [id]);

  const [formData, setFormData] = useState({
    event_id: id,
    user_id: user,
    Total_price: data.price,
    payment_method: '0',
    phone: '',
    address: '',
    notes: '',
    kidsNum: '1',
    card_number: '',
    exp_number: '',
    exp_year: '',
    cvc: ''

  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const checkAllFieldsFilled = () => {
    const requiredFields = ['phone', 'address', 'payment_method', 'notes', 'kidsNum', 'kid1', 'age1'];

    const isAllFilled = requiredFields.every(field => formData[field]);

    setAllFieldsFilled(isAllFilled);
  };

  useEffect(() => {
    checkAllFieldsFilled();

  }, [formData]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'kidsNum') {
      const total_price = parseInt(value) * Price;
      const updatedFormData = { ...formData, [name]: value, Total_price: total_price };

      for (let i = Number(value) + 1; i <= formData.kidsNum; i++) {
        updatedFormData[`kid${i}`] = '';
        updatedFormData[`age${i}`] = '';
      }

      setFormData(updatedFormData); // Set formData with updatedFormData directly
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const generateKidInputs = () => {

    let inputs = [];
    for (let i = 1; i <= formData.kidsNum; i++) {
      inputs.push(
        <React.Fragment key={`kid${i}`}>
          <div className="col-lg-8">
            <div className="form_single_item">
              <input
                type="text"
                name={`kid${i}`}
                placeholder={`Kid Name ${i}`}
                value={formData[`kid${i}`] || ''}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form_single_item">
              <input
                type="number"
                className="px-1"
                name={`age${i}`}
                placeholder={`Age`}
                value={formData[`age${i}`] || ''}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </React.Fragment>
      );
    }
    return inputs;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/bookings', formData);
      // const response = await axios.post('https://6521236ba4199548356cd771.mockapi.io/all_rooms', formData);
      console.log(response.data);
      Swal.fire({
        title: 'Thank you ♥<br></br>Your booking has been successfully completed',
        showConfirmButton: true,
        confirmButtonText: 'Go to Home',
        confirmButtonColor: '#fe4b7b',
        allowEscapeKey: false,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/');
        }
      });
      
      const { message, booking } = response.data;
      console.log(response);
      console.log('Booking details:', booking);

      // alert(response.status);
      // Add any other handling as needed

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return (
    <section className="contact_page section_padding">
      <form id="bookingForm" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact_form form_style">
                <h2 className="kid_title mb-4">
                  <span className="title_overlay_effect">Booking Details</span>
                </h2>
                <input type="hidden" name="event_id" placeholder="event_id" value={formData.event_id} onChange={handleInputChange} />
                <input type="hidden" name="user_id" placeholder="user_id" value={formData.user_id} onChange={handleInputChange} />
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form_single_item">
                      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_single_item">
                      <input

                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        style={{
                          border: '1px solid #ccc',
                          padding: '10px',
                          width: '100%',
                          fontSize: '16px',
                          backgroundColor: '#f5f9fb',
                          borderRadius: '5px',
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_single_item">
                      <select
                        name="payment_method"
                        id="payment_method"
                        value={formData.payment_method}
                        onChange={handleInputChange}
                        required
                        style={{
                          border: '1px solid #ccc',
                          padding: '10px',
                          width: '100%',
                          fontSize: '16px',
                          backgroundColor: '#f5f9fb',
                          borderRadius: '5px',
                        }}
                      >
                        <option value="0" disabled>--- Choose Payment Method ---</option>
                        <option value="cash">Cash</option>
                        <option value="paypal">PayPal</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form_single_item">
                      <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleInputChange} required></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pl-lg-5">
              <div className="contact_form form_style">
                <h2 className="kid_title mb-4">
                  <span className="title_overlay_effect">Kids</span>
                </h2>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form_single_item">
                      <input
                        min="1"
                        value={formData.kidsNum}
                        type="number"
                        name="kidsNum"
                        placeholder="kidsNum"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  {generateKidInputs()}
                </div>
              </div>
            </div>

            {formData.payment_method === 'paypal' && allFieldsFilled && (
              <div className='mx-auto mt-3'>
                <PaypalCheckoutButton formData={formData} />
              </div>
            )}




            {formData.payment_method === 'cash' &&user&& (
              <button type="submit" className="pc-button elementor-button button-link cu_btn mx-auto">
                <div className="button-content-wrapper">
                  <span className="elementor-button-text">BOOK NOW</span>
                  <svg className="pc-dashes inner-dashed-border animated-dashes">
                    <rect x="5px" y="5px" rx="25px" ry="25px" width="0" height="0"></rect>
                  </svg>
                </div>
              </button>)}
            {formData.payment_method === 'CreditCard' &&user&& (
              <div className="credit-card-popup col-lg-12 mt-3">
                <div className="credit-card-content">
                  <div className="col-lg-6 mx-auto pop-CC p-3">
                    <div className="contact_form form_style">
                      <h2 className="kid_title mb-4">
                        <span className="title_overlay_effect">Credit Card</span>
                      </h2>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form_single_item">
                            <input type="text" name="card_number" max="12" min="12" placeholder="Card Number" value={formData.card_number} onChange={handleInputChange} required />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form_single_item">
                            <input type="text" name="exp_number" placeholder="MM" value={formData.exp_number} onChange={handleInputChange} required />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form_single_item">
                            <input type="text" name="exp_year" max="4" min="4" placeholder="YYYY" value={formData.exp_year} onChange={handleInputChange} required />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form_single_item">
                            <input type="text" name="cvc" placeholder="CVC" value={formData.cvc} onChange={handleInputChange} required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6 mx-auto'>
                        <button type="submit" className="pc-button elementor-button button-link cu_btn mx-auto" >
                          <div className="button-content-wrapper">
                            <span className="elementor-button-text">BOOK NOW</span>
                            <svg className="pc-dashes inner-dashed-border animated-dashes">
                              <rect x="5px" y="5px" rx="25px" ry="25px" width="0" height="0"></rect>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
             {!user&& (
              <Link to='/login' className="pc-button elementor-button button-link cu_btn mx-auto">
                <div className="button-content-wrapper">
                  <span className="elementor-button-text">Login First</span>
                  <svg className="pc-dashes inner-dashed-border animated-dashes">
                    <rect x="5px" y="5px" rx="25px" ry="25px" width="0" height="0"></rect>
                  </svg>
                </div>
              </Link>)}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Booking;
