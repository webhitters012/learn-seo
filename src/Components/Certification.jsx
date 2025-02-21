import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Certification.css';

const certifications = [
  {
    src: 'Images/Certificate/4.jpg',
    alt: 'Google Adwords Certification',
    title: 'Google AdWords Certification',
  },
  {
    src: 'Images/Certificate/3.jpg',
    alt: 'Inbound Marketing Certification',
    title: 'Inbound Marketing Certification',
  },
  {
    src: 'Images/Certificate/2.jpg',
    alt: 'Email Marketing Certification',
    title: 'Email Marketing Certification',
  },
  {
    src: 'Images/Certificate/1.jpg',
    alt: 'Content Marketing Certification',
    title: 'Content Marketing Certification',
  },
];

const Certification = () => {
  return (
    <div className="container mt-5">
      {/* Section Title */}
      <div className="SEO-tool">
        <div className="flex-text">
          <h1 className="h1-of-SEO-tool">
            <b>
              The Digital Marketing <span className="adf">Course Certification</span>
            </b>
          </h1>

          <p className="p-of-SEO-tool">
            Our effective <span className="adf"> SEO course in Chandigarh</span> in digital
            marketing provides certifications in these courses. With these documents, you can prove
            your skills to potential employers and advance your career in the field of digital
            marketing.
          </p>
        </div>
      </div>

      {/* Certification Cards */}
      <div className="row d-flex justify-content-center align-items-stretch">
        {certifications.map((cert, index) => (
          <div key={index} className="col-6 col-md-3 d-flex flex-column align-items-center shi">
            <div className="cert-img-container text-center">
              <img className="cert-img" src={cert.src} alt={cert.alt} />
            </div>
            <p className="text-center mt-2">{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
