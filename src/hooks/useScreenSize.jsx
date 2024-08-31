/**
 * @name Hotel Room Booking System
 * @author Kir Kalarash
 * @description Hotel Room Booking and Management System Software ~ Developed By Kir Kalarash
 * @copyright ©2023 ― Kir Kalarash. All rights reserved.
 * @version v0.0.1
 *
 */

import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenWidth, screenHeight };
};

export default useScreenSize;
