// -----------------------------------------------------------------------------
// Project: Mindful Eating (React Native Frontend)
// Author: Md Samshad Rahman
// Year: 2025
// License: GNU Affero General Public License v3.0 (See LICENSE file for details)
// Description: This file is part of the Mindful Eating project.
// -----------------------------------------------------------------------------
// utils/toastConfig.js
import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#2ecc71' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 14,
        color: '#444',
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#e74c3c' }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
};
