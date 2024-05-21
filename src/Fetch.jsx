import React, { useState, useEffect } from 'react';
import { TbWorld } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import EditForm from './Edit';
import { Audio } from 'react-loader-spinner';
import './App.css'
import { BiTrash } from 'react-icons/bi';

const Fetch = () => {
    const [user, setUser] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    // const addTocart = (product) => {
    //     setUser([...user, product]);
    // }

    // const removeCart = (itemId) => {
    //     setUser(user.filter(item => item.id !== itemId))
    // }



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

    useEffect(() => {

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => {
                    const usersWithLikes = data.map(user => ({ ...user, liked: false }));
                    setUser(usersWithLikes);
                    setIsLoading(false);
                });

        }, 3000);
    }, []);

    if (isLoading) {
        return <div className="d-flex justify-content-center loading"><Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
        </div>
    }

    return (
        <div className='row'>
            <h1 className='text-center text- mb-5 text-decoration-underline text-primary'>Fetching User Data</h1>

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
                                            className='text-white btn btn-primary fs-3 text-center'
                                            onClick={() => toggleWishlist(item.id)}
                                            style={{ backgroundColor: item.liked ? 'red' : '' }}
                                        >
                                            <CiHeart />
                                        </button>
                                        {/* <p className='text-color bg-white fs-1' onClick={()=>wish(item.id)}>{like}</p> */}

                                        <button className='btn btn-success fs-3 text-center pt-0' onClick={() => handleEdit(item.id)}><FaEdit /></button>
                                        <button className='btn btn-danger fs-3 text-center' onClick={() => removeCard(item.id)}><FaRegTrashCan className='text-center' /></button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}


            {/* <h1 className='text-center bg-dark text-white p-5'>Cart</h1>
            <ul className='d-flex m-5 justify-content-center list-unstyled flex-wrap bg-dark '>
                {user.map(item => (
                    <li className='m-5 border rounded p-3' key={item.id}>
                         <img
                            className='card-img-top m-auto bg-dark p-2'
                            src={item.image ? item.image : `https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=happy`}
                            alt="Avatar"

                        />
                        <h5 className="card-title text-white">Name: {item.username}</h5>
                        <p className='text-white'><MdOutlineEmail className='text-white fs-4' /> {item.email}</p>
                        <p className='text-white'><FaMobileAlt className='text-white fs-4' /> {item.phone}</p>
                        <p className='text-white'><TbWorld className='text-white fs-4' /> {item.website}</p>
                        <button className='mt-3 btn btn-danger' onClick={() => removeCart(item.id)}><BiTrash className='fs-3'/></button>
                    </li>
                ))}
            </ul> */}


        </div>
    );
}

export default Fetch;