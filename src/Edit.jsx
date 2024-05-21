import React, { useState } from 'react';

const EditForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(user.id, formData);
    };

    return (
        <div className="edit-form">
            <h3>Edit User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Website</label>
                    <input type="text" name="website" value={formData.website} onChange={handleChange} className="form-control" />
                </div>
                <div className='d-flex justify-content-between'>
                <button type="submit" className="btn btn-primary m-2">Save</button>
                <button type="button" className="btn btn-danger m-2" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;
