'use client'

import React from "react";

// Define the props interface for Heading
interface HeadingProps {
    title: string;
    center?: boolean;
}


const Heading: React.FC<HeadingProps> = ({ title, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <h1 className="font-bold text-2xl">{title}</h1>
        </div>
    );
}

// Export the Heading component as the default export
export default Heading;
