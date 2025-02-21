import React, { useState } from 'react';
import './Imagegallery.css';

const sections = [
  {
    id: 1,
    title: 'Trip to ___',
    preview: './Images/Preview/trips.jpg',
    images: [
      './Images/Life/9.jpg',
      'nature2.jpg',
      'nature3.jpg',
      'nature4.jpg',
      'nature5.jpg',
      'nature6.jpg',
    ],
  },
  {
    id: 2,
    title: 'Birthdays',
    preview: './Images/Preview/birthdays.jpg',
    images: [
      './Images/Life/3.jpg',
      'arch2.jpg',
      'arch3.jpg',
      'arch4.jpg',
      'arch5.jpg',
      'arch6.jpg',
    ],
  },
  {
    id: 3,
    title: 'Christmas',
    preview: './Images/Preview/functions.jpg',
    images: [
      'animal1.jpg',
      'animal2.jpg',
      'animal3.jpg',
      'animal4.jpg',
      'animal5.jpg',
      'animal6.jpg',
    ],
  },
  {
    id: 4,
    title: 'Diwali',
    preview: './Images/Preview/events.jpg',
    images: ['event1.jpg', 'event2.jpg', 'event3.jpg', 'event4.jpg', 'event5.jpg', 'event6.jpg'],
  },
];

const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {sections.map((section) => (
          <div key={section.id} className="section-container">
            <img src={section.preview} alt={section.title} className="preview-image" />
            <button className="open-modal-btn" onClick={() => setSelectedSection(section)}>
              View {section.title}
            </button>
          </div>
        ))}
      </div>

      {selectedSection && (
        <div className="modal" onClick={() => setSelectedSection(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedSection(null)}>
              &times;
            </span>
            <h2>{selectedSection.title}</h2>
            <div className="image-grid">
              {selectedSection.images.map((img, index) => (
                <img key={index} src={img} alt={selectedSection.title} className="gallery-image" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
