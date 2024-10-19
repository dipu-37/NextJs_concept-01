import React from 'react';

const page = ({params}) => {
    console.log(params);
    if(params.features.length==3){
        return (
            <div>{params.features[2]}</div>
        )
    }
    return (
        <div className='h-screen'>
            catagories detaila page
        </div>
    );
};

export default page;