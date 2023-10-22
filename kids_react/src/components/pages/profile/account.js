import React, { useState } from 'react';
import axios from 'axios';

function AccountSettingsForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [changePassword, setChangePassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleImage = (e) => {
        setImage( e.target.files[0] );
      };
      const user=sessionStorage.getItem('user_id');
    const handleUpdateProfile = () => {
        axios.put(`http://127.0.0.1:8000/api/updateProfile/${user}`, {
        // axios.put('https://64db1755593f57e435b069dd.mockapi.io/sdsdds/1', {
            firstName,
            lastName,
            // email,
            image,
            phone,
            password,
            newPassword,
            confirmNewPassword
        })
        .then(response => {
            console.log(response.data);
            console.log('Profile updated successfully:', response.data);
            alert('Profile updated successfully:', response.data);
            // Add any additional logic after a successful update
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.errors) {
                // If there are validation errors, display them in an alert
                alert(error.response.data.errors.join('\n'));
            } else {
                console.error('Error updating profile:', error);
                // Handle other types of errors or display a generic error message
            }
            // Handle errors or display error messages
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Image:', image);
        console.log('Phone:', phone);
        console.log('Current Password:', password);
        console.log('New Password:', newPassword);
        console.log('Confirm New Password:', confirmNewPassword);

        // if (password !== 'correctpassword') {
        //     setPasswordError('Incorrect current password. Please try again.');
        //     return;
        // }

        if (newPassword !== confirmNewPassword) {
            setPasswordError('New passwords do not match. Please try again.');
            return;
        }

        setPasswordError('');

        handleUpdateProfile(); // You may want to call this function here or as needed.
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPasswordError('');
            setCurrentPassword(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmNewPassword') {
            setConfirmNewPassword(value);
        }
    };

    return (
        <form onSubmit={handleSubmit} >
               <div className="row justify-content-center mt-3">
                <div className="col-lg-7">
                    <div className="section_tittle_style_02">
                        <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                            <span className="title_overlay_effect"> My Profile</span>
                        </h2>

                    </div>

                </div>
            </div>
            <div className="mb-3 row"  style={{marginTop:'-50px'}}>
                <div className="col">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} name='last_name' />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image"  onChange={handleImage} name='image'/>
                </div>
                <div className="col">
                    <label htmlFor="phone" className="form-label">Email</label>
                    <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                <input type="password" className="form-control" id="currentPassword" value={password} onChange={handlePasswordChange} name='password' />
                {passwordError && <div className="text-danger">{passwordError}</div>}
            </div>
            <div className="mb-3">
                <button type="button" id="changePassword" onClick={() => setChangePassword(!changePassword)} className="btn btn-link  " style={{color:'#12265A'}}>
                    {changePassword ? 'Cancel' : 'Change Password'}
                </button>
            </div>
            {changePassword && (
                <div>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={handlePasswordChange} name='newPassword' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" id="confirmNewPassword" value={confirmNewPassword} onChange={handlePasswordChange} name='confirmNewPassword'/>
                        {newPassword !== confirmNewPassword && <div className="text-danger">Passwords do not match.</div>}
                    </div>
                </div>
            )}
            <button type='submit' className="cu_btn btn_1">
                        Update Profile
                      </button>
        </form>
    );
}

export default AccountSettingsForm;
