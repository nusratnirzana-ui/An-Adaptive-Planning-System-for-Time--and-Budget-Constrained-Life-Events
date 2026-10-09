import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  { id: 'moving_home', title: 'Moving Home', icon: '🚚', desc: 'Hassle-free home shifting and relocation services.' },
  { id: 'birthday_parties', title: 'Birthday Parties', icon: '🎉', desc: 'Plan unforgettable birthday bashes effortlessly.' },
  { id: 'road_trips', title: 'Road Trips', icon: '🛣️', desc: 'Custom routes and arrangements for your adventures.' },
  { id: 'farewell', title: 'Farewell', icon: '🎓', desc: 'Memorable send-offs for your loved colleagues and friends.' },
  { id: 'celebrations', title: 'Celebrations', icon: '✨', desc: 'Milestones, anniversaries, and special moments.' },
  { id: 'next_big_thing', title: 'Your Next Big Thing', icon: '🚀', desc: 'Custom event and service planning tailored for you.' },
];

function Services() {
  // ক্লিক করা সার্ভিসটি ট্র্যাক করতে স্টেট
  const [activeForm, setActiveForm] = useState(null);

  const handleCardClick = (service) => {
    setActiveForm(service);
    // পরবর্তীতে এখানে ফরম পপ-আপ বা মোডাল ওপেন হবে
    console.log(`Selected service for form: ${service.title}`);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Explore Our Services</h2>
        <p>Choose an option below to start planning your event</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleCardClick(service)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="card-action-btn">Plan Now →</button>
          </div>
        ))}
      </div>

      {activeForm && (
        <div className="form-modal-overlay" onClick={closeForm}>
          <div className="form-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeForm}>✕</button>
            <h3>Request Service: <span className="highlight">{activeForm.title}</span></h3>
            <p>Fill out the details below and we'll handle the rest!</p>

            <form onSubmit={(e) => { e.preventDefault(); alert(`Submitted request for ${activeForm.title}`); closeForm(); }}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Contact Number / Email</label>
                <input type="text" placeholder="Enter phone or email" required />
              </div>
              <div className="form-group">
                <label>Date & Details</label>
                <textarea rows="3" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;