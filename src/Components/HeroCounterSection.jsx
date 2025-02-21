import { useEffect, useState, useMemo } from 'react';
import './HeroCounterSection.css';

const HeroSection = () => {
  const countersData = useMemo(
    () => [
      { id: 1, target: 500, label: 'Candidates Trained' },
      { id: 2, target: 100, label: 'Live Projects' },
      { id: 3, target: 30, label: 'Professionals' },
      { id: 4, target: 2008, label: 'Since' },
    ],
    []
  );

  const [counts, setCounts] = useState(
    countersData.map((counter, index) => {
      if (counter.id === 4) {
        return { value: 1000, completed: false };
      } else {
        return { value: 0, completed: false };
      }
    })
  );

  useEffect(() => {
    const speed = 50; // Reduce the speed value
    let maxTarget = Math.max(...countersData.map((counter) => counter.target));
    let timeouts = [];

    countersData.forEach((counter, index) => {
      let increment = counter.target / speed;

      const updateCount = () => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          let currentCount = newCounts[index].value;

          if (currentCount < counter.target) {
            newCounts[index] = { value: Math.ceil(currentCount + increment * 2), completed: false }; // Increase the increment value
            return newCounts;
          } else {
            newCounts[index] = { value: counter.target, completed: true };
            return newCounts;
          }
        });

        if (counts[index].value < counter.target) {
          const timeout = setTimeout(updateCount, speed / maxTarget / 2); // Reduce the interval time
          timeouts.push(timeout);
        }
      };

      const initialTimeout = setTimeout(updateCount, 100);
      timeouts.push(initialTimeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [countersData, counts]);

  return (
    <div>
      <div className="herosection">
        <button className="btn-div">REGISTER NOW</button>
      </div>

      <div className="main-number-section-of-hero">
        <div className="number-section-of-hero">
          <div className="numberdiv">
            {countersData.map((counter, index) => (
              <div className={`no${index + 1}`} key={counter.id}>
                <div className="for-plus">
                  <h1>
                    {counts[index].value}
                    {counter.id !== 4 && <span>+</span>}
                  </h1>
                </div>
                <p className={counter.id === 4 ? 'since-text' : ''}>{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
