/**
 * @name Hotel Room Booking System
 * @author Kir Kalarash
 * @description Hotel Room Booking and Management System Software ~ Developed By Kir Kalarash
 * @copyright ©2023 ― Kir Kalarash. All rights reserved.
 * @version v0.0.1
 *
 */

import { Navigate } from 'react-router-dom';
import { getSessionToken, getSessionUser } from '../../utils/authentication';

function PrivateRoute({ children }) {
  const user = getSessionUser();
  const token = getSessionToken();

  if (!user && !token) {
    return <Navigate to='/auth/login' replace />;
  }
  return children;
}

export default PrivateRoute;
