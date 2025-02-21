import React, { useState } from 'react';
import './TeamSection.css';

const teamMembers = [
  {
    id: 1,
    name: '',
    image: './Images/placed/5.jpg',
    bio: 'Ivan is a passionate software engineer with experience in React.',
  },
  {
    id: 2,
    name: 'Prisha Das',
    image: './Images/placed/14.jpeg',
    bio: 'Karishma is an expert in data science and loves working with AI.',
  },
  {
    id: 3,
    name: '',
    image: './Images/placed/2.jpg',
    bio: 'Alexis is a digital marketing strategist with a love for SEO.',
  },
  {
    id: 4,
    name: '',
    image: './Images/placed/8.png',
    bio: 'Yatin is a SEO expert',
  },
  {
    id: 5,
    name: '',
    image: './Images/placed/9.png',
    bio: 'Alberto is a full-stack developer with experience in MERN stack.',
  },
  {
    id: 6,
    name: '',
    image: './Images/placed/10.png',
    bio: 'Melissa is a UI/UX designer focused on creating seamless experiences.',
  },
];

const TraineeSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div>
      <h1 className="h1-of-SEO-tool gyt">
        <b>
          Our Recent <span className="adf">Trainees</span>
        </b>
      </h1>
      <div className="team1-section">
        <div className="team1-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team1-card">
              <img src={member.image} alt={member.name} className="team1-image" />
              <h3 className="team1-name">{member.name}</h3>
              <button className="view-bio-btn" onClick={() => setSelectedMember(member)}>
                View Bio
              </button>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="modal1-overlay" onClick={() => setSelectedMember(null)}>
            <div className="modal1-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-modal1" onClick={() => setSelectedMember(null)}>
                &times;
              </span>
              <div className="modal1-grid">
                <div className="modal1-image">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                </div>
                <div className="modal1-text">
                  <h2>{selectedMember.name}</h2>
                  <p>{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TraineeSection;
