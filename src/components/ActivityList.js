import React from 'react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';

const Activities = ({ onAdd }) => {
    return (
        <section id="activities" className="section">
            <h1 className="section-title">Tourist Activities</h1>
            <div className="activities-graella">
                {activities.map((activity) => (<ActivityCard activity={activity} onAdd={onAdd} />))}
            </div>
        </section>
    );
};

export default Activities;
