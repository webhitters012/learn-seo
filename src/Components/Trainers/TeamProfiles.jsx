import React from 'react';
import './TeamProfiles.css';

const teamMembers = [
  {
    name: 'Sandeep Bhandri',
    pronouns: 'Since 2008',
    title: 'Digital Marketing Expert',
    description:
      "SEO, or Search Engine Optimization, is a digital marketing strategy focused on improving a website's visibility in search engine results pages",
    image: './Images/trainers/234444.jpg',
  },
  {
    name: 'Om Gupta',
    pronouns: 'Since 2019',
    title: 'Digital Marketing Expert',
    description:
      'John has been in the creative industry for over a decade, specializing in modern design solutions...',
    image: './Images/trainers/Om-Sir.png',
  },
  {
    name: 'Rahul Yadav',
    pronouns: 'Since 2013',
    title: 'Digital Marketing Expert',
    description:
      "SEO, or Search Engine Optimization, is a digital marketing strategy focused on improving a website's visibility in search engine results pages ",
    image: './Images/trainers/Rahul1.png',
  },
  {
    name: 'Manish Bhardawaj',
    pronouns: 'Since 2015',
    title: 'Web Designer',
    description:
      'Michael ensures everything runs smoothly behind the scenes, keeping the business operations efficient...',
    image: './Images/trainers/Manish-Sir.png',
  },
];

const TeamProfiles = () => {
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`team-section ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
        >
          <img src={member.image} alt={member.name} className="team-image" />
          <div className="team-text">
            <h3>{member.title}</h3>
            <h2>{member.name}</h2>
            <p>
              <em>{member.pronouns}</em>
            </p>
            <p>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamProfiles;
