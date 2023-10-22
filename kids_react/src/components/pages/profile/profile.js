import React, { useState, useEffect } from 'react';
import MyBookingsPage from './mybookings';
import MyCommentsPage from './myreviews';
import AccountSettingsForm from './account';
import axios from 'axios';

function UserProfile() {
    const defaultUserData = {
        first_name: "",
        last_name: "",
        email: "",
        image: "",
        phone: "",

    };


    const [userData, setUserData] = useState(defaultUserData);
    const [activeTab, setActiveTab] = useState('my-bookings');
    const user=sessionStorage.getItem('user_id');
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/updateProfile/${user}`)
            .then(response => {
                setUserData(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    // console.log(userData);

    let tabContent;

    if (activeTab === 'my-bookings') {
        tabContent = <MyBookingsPage />;
    } else if (activeTab === 'my-comments') {
        tabContent = <MyCommentsPage />;
    } else if (activeTab === 'account-settings') {
        tabContent = <AccountSettingsForm />;
    }

    return (
        <section style={{ backgroundColor: 'white' }}>
            
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                {/* src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" */}
                                <img src={userData.image} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                <h5 className="my-3">{userData.first_name}</h5>
                                <h6 className="my-3">{userData.phone}</h6>
                                <p className="text-muted mb-4">{userData.email}</p>
                                <div className="justify-content-center mb-2">
                                    <button type="button" className={`form-control ${activeTab === 'my-bookings' ? 'btn-primary' : 'btn-outline-primary'}  `}  onClick={() => handleTabChange('my-bookings')} >My Bookings</button>
                                    <br></br>
                                    <button type="button" className={`form-control ${activeTab === 'my-comments' ? 'btn-primary' : 'btn-outline-primary'} `} onClick={() => handleTabChange('my-comments')} >My Reviews</button>
                                    <br></br>
                                    <button type="button" className={`form-control ${activeTab === 'account-settings' ? 'btn-primary' : 'btn-outline-primary'} `} onClick={() => handleTabChange('account-settings')} >Account Settings</button>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                {tabContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;
