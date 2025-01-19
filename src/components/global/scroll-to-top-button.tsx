import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  };

  return (
    <div className='fixed bottom-[3rem] right-0 left-0 flex items-center justify-center z-100'>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ y: 0 }}
          animate={{ y: [0, -25, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.0,
            ease: 'easeInOut',
          }}
          whileHover={{
            y: 0,
            transition: {
              duration: 0.2,
            },
          }}
          className='py-[1rem] px-[1rem] bg-light-blue text-primary border-none rounded-full shadow-md shadow-light-blue cursor-pointer hover:text-primary-pink -z-20'
        >
          <ArrowUp />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
