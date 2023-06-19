import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodItemsCard from './FoodItemsCard';

const FoodItems = () => {

    const data = useLoaderData();
    const items = data.otherItems;

    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    items.map((item, id) => <FoodItemsCard
                        key={id}
                        item={item}
                    ></FoodItemsCard>)
                }
            </div>
        </div>
    );
};

export default FoodItems;