import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios"; 

const handleSubmit = async (formData) => {
    try {
        const response = await axios.post('http://localhost:8000/api/bookings', formData);
        // const response = await axios.post('https://6521236ba4199548356cd771.mockapi.io/all_rooms', formData);
        console.log(response.data);
        const { message, booking } = response.data;

        console.log(response);
        console.log('Booking details:', booking);

        // alert(response.status);
        // Add any other handling as needed

    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

const PaypalCheckoutButton = (props) => {
    const { formData } = props;

    const [error, setError] = useState(null);
    const handleApprove = (orderId) => {
        handleSubmit(formData);
        alert("Thank you ♥");
    };


    if (error) {
        alert(error);
    }
    return (
        <PayPalButtons
            style={{
                color: "blue",
                layout: "horizontal",
                height: 48,
                tagline: false,
                shape: "pill"
            }}
            onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false;

                if (hasAlreadyBoughtCourse) {
                    setError(
                        "you already have a booking"
                    );

                    return actions.reject();
                } else {
                    return actions.resolve();
                }
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: formData.notes,
                            amount: {
                                value: formData.Total_price
                            }
                        }
                    ]
                });
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);

                handleApprove(data.orderID);

            }}
            onCancel={() => {
            }}
            onError={(err) => {
                setError(err);
                console.error("PayPal Checkout onError", err);
            }}
        />
    );
};

export default PaypalCheckoutButton;
