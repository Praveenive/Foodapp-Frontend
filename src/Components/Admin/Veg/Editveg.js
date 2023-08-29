import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../../../Base/Base';

export default function EditVeg({vegdishes,setVegdishes}) {
    const navigate = useNavigate();
    const { id, token } = useParams();
    const [dishname, setDishname] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    useEffect(()=>{
        const data = vegdishes?.find((data)=>data._id===id)
        console.log(data)
        if(data){
         setDishname(data.dishname),
         setPrice(data.price),
         setImage(data.image)
        }
   },[id,vegdishes])


    const editDish = async () => {
        const editdish = {dishname,image,price};
        try {
            const response = await fetch(
                `https://foodapp-backend-jkro-praveenive.vercel.app/vegdish/updatedish/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(editdish),
                    headers: {
                        'x-auth-token': token,
                        'Content-type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            console.log(data); 
            const userindex = vegdishes?.findIndex((data, idx)=>data._id === id);
            vegdishes[userindex] = data.data;
             await setVegdishes([...vegdishes])
            navigate('/adminveg'); 
        } catch (error) {
            setError('An error occurred while updating the dish.');
            console.error(error);
        }
    }

    return (
        <Base>
            <h1>Update Veg Dish</h1>
            <div className='add'>
                <TextField
                    id="filled-basic"
                    label="Veg-Dish name"
                    variant="filled"
                    value={dishname}
                    onChange={(e) => setDishname(e.target.value)}
                    fullWidth
                />
                <TextField
                    id="filled-basic"
                    label="Price"
                    variant="filled"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                />
                <TextField
                    id="filled-basic"
                    label="Image"
                    variant="filled"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    fullWidth
                />
            </div>
            <br /><br />
            <Button variant='contained' onClick={editDish}>
                Edit Dish
            </Button>
        </Base>
    );
}
