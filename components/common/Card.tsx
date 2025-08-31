import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="border p-4 shadow rounded">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
