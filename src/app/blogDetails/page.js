import UseBlogDetails from '@/components/Hooks/UseBlogDetails';
import React from 'react';

const page = async ({ searchParams }) => {

    const id = searchParams.id
    const data = await UseBlogDetails(id)

    return (
        <div>

        </div>
    );
};

export default page;