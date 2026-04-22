import { useEffect } from 'react';

const Trial = () => {
  useEffect(() => {
    window.location.href = 'https://dashboard.euphoricai.io/free-trial';
  }, []);

  return null;
};

export default Trial;
