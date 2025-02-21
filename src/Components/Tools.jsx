import { useEffect, useRef } from 'react';
import './Tools.css';

const images = [
  './Images/tools-logo/ads.png',
  './Images/tools-logo/ahrefs.png',
  './Images/tools-logo/AnswerThePublic.png',
  './Images/tools-logo/Bing.png',
  './Images/tools-logo/Canva.png',
  './Images/tools-logo/Gemini.png',
  './Images/tools-logo/Google-AdWords.png',
  './Images/tools-logo/google-analytics.png',
  './Images/tools-logo/Google-Data-Studio.png',
  './Images/tools-logo/google-pagespeed-insights.png',
  './Images/tools-logo/Google-Search-Console.png',
  './Images/tools-logo/gpt.png',
  './Images/tools-logo/google-pagespeed-insights.png',
  './logo/SE Ranking.jpg',
  './logo/Yoast SEO.jpg',
  './logo/Buffer.jpg',
  './logo/Answer The Public.jpg',
  './logo/Grammarly.jpg',
  './logo/Rank Math.jpg',
  './logo/Sprout Social.jpg',
];

export default function SeoToolsSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animation = slider.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-85%)' }],
      {
        duration: 50000, // 10s
        iterations: Infinity,
        easing: 'linear',
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <div className="main-SEO-tool-section">
      <div className="SEO-tool">
        <div className="flex-text">
          <h1 className="h1-of-SEO-tool">
            <b>
              The SEO <span className="adf">Tools</span>
            </b>
          </h1>

          <p className="p-of-SEO-tool">
            We will walk through the usage of more than 15 modern instruments used by{' '}
            <span className="adf">
              <b>Digital Marketing Training in Zirakpur, Chandigarh,</b>
            </span>{' '}
            and around the nation. By using these tools, you can define your brand journey more
            effectively and with greater automation and analytical power.
          </p>
        </div>
      </div>

      <div className="main-div-of-slider">
        <div className="image-slider-wrapper">
          <div className="image-slider" ref={sliderRef}>
            {/* Duplicate images to create smooth infinite scrolling effect */}
            {[...images, ...images].map((src, index) => (
              <div key={index} className="tool-slider-container">
                <img className="tool-slider" src={src} alt={src.split('/').pop().split('.')[0]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
