import { useState, useEffect, FC } from 'react';
import { ArrowUp } from 'lucide-react';
import '../styles/BackToTop.css';

const BackToTop: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`back-to-top ${isVisible ? 'visible' : ''}`} 
      onClick={scrollToTop} 
      aria-label="Back to top"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
    >
      <ArrowUp size={24} />
    </div>
  );
};

export default BackToTop;
