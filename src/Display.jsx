import React,{useState} from 'react'
import { TbWorld } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import EditForm from './Edit';

const Display = ({ user }) => {

    const [editingUserId, setEditingUserId] = useState(null);
    


    const removeCard = (id) => {
        setUser(user.filter(item => item.id !== id));
    };

    const toggleWishlist = (id) => {
        setUser(user.map(item => item.id === id ? { ...item, liked: !item.liked } : item));
    };

    const handleEdit = (id) => {
        setEditingUserId(id);
    };

    const handleSave = (id, updatedData) => {
        setUser(user.map(item => item.id === id ? { ...item, ...updatedData } : item));
        setEditingUserId(null);
    };

    const handleCancel = () => {
        setEditingUserId(null);
    };

  
    return (
        <div className='row'>
            {user.map((item) => (
                <div className="col-sm-12 col-md-4 col-lg-4 col-12 cards container" key={item.id} style={{ width: '18rem' }}>
                    <div className="card bg-dark mb-5 d-flex" style={{ width: '18rem' }}>
                        <img
                            className='card-img-top m-auto bg-dark p-2'
                            src={item.image ? item.image : `https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=happy`}
                            alt="Avatar"

                        />
                        <div className="card-body">
                            {editingUserId === item.id ? (
                                <EditForm
                                    user={item}
                                    onSave={handleSave}
                                    onCancel={handleCancel}
                                />
                            ) : (
                                <>
                                    <h5 className="card-title text-white">Name: {item.username}</h5>
                                    <p className='text-white'><MdOutlineEmail className='text-white fs-4' /> {item.email}</p>
                                    <p className='text-white'><FaMobileAlt className='text-white fs-4' /> {item.phone}</p>
                                    <p className='text-white'><TbWorld className='text-white fs-4' /> {item.website}</p>
                                    <div className="icons d-flex justify-content-around">
                                        <button
                                            className='btn btn-primary px-3 fs-3'
                                            onClick={() => toggleWishlist(item.id)}
                                            style={{ backgroundColor: item.liked ? 'red' : '' }}
                                        >
                                            <CiHeart />
                                        </button>
                                        <button className='btn btn-success fs-3 text-center pt-0' onClick={() => handleEdit(item.id)}><FaEdit /></button>
                                        <button className='btn btn-danger fs-3 text-center' onClick={() => removeCard(item.id)}><FaRegTrashCan className='text-center' /></button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}


        </div>

        
    )
}

export default Display
