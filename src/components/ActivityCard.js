import React from 'react';

const ActivityCard = ({ activity, onAdd }) => {
    return (
        <div className="activity-card">
            <img src={activity.image} className="activity-image" />
            <div className="activity-price">
                <h3>{activity.name}</h3>
                <strong>{activity.price}€</strong>
            </div>
            <p>{activity.description}</p>
            <button className="btn-add" onClick={() => onAdd(activity)}>
                Add to cart
            </button>
        </div>
    );
};
export default ActivityCard;
