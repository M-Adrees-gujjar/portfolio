import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Type.css';

export default function MyComponent() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'I am a <i>Developer</i>',
        'I build Websites',
        'Skilled in <i>React.js</i>',
        'Skilled in <i>Node.js</i>',
        'Skilled in <i>Express.js</i>',
        'Skilled in <i>MongoDB</i>'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className="typed-text text-4xl md:text-2xl lg:text-4xl text-white" />
    </div>
  );
}
