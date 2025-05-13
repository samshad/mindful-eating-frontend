# Mindful Eating Frontend🧘‍♀️🍲

![License](https://img.shields.io/github/license/samshad/mindful-eating-frontend)
![React Native](https://img.shields.io/badge/React%20Native-0.76.6-blue)
![Expo](https://img.shields.io/badge/Expo-52.0.0-blue)
![build](https://img.shields.io/badge/build-passing-brightgreen)

## Overview

The **Mindful Eating Frontend** is a React Native application built with **Expo** that pairs with the [Mindful Eating Backend](https://github.com/samshad/mindful-eating-backend) to deliver a personalized mindful-eating experience. Users can:

- **Register** and **login** securely.
- Complete a **Big Five** personality questionnaire.
- Receive **daily AI-generated** mindful-eating tips tailored to their dominant big5 trait.
- **Log meals** with photos and review a timeline.
- **Chat** with the AI coach in an interactive interface.
- **Manage** their profile details and targeted eating behaviors.
- Get **network connection** alerts and **custom toast** notifications.

## Features

- **Authentication Flows**  
  Screens for registration, login, and password reset.

- **Survey & Onboarding**  
  Collect basic info and Big Five trait responses.

- **Daily Tips**  
  AI-powered tips generation with the backend.

- **Meal Logging**  
  Capture or upload meal images and view in-app timeline.

- **Chat Interface**  
  Real-time messaging with conversational tips.

- **Profile Management**  
  View and edit profile, update target behavior.

## Tech Stack

| Category           | Dependencies                                                  |
|--------------------|---------------------------------------------------------------|
| Mobile Framework   | React Native · Expo                                           |
| Navigation         | `@react-navigation/native` · `@react-navigation/native-stack` |
| State Management   | React Context API                                             |
| Networking         | Axios (`axios`)                                               |
| Forms & Validation | Formik · Yup                                                  |
| Media Handling     | `expo-image-picker` · `expo-permissions`                      |
| Storage            | AsyncStorage (`@react-native-async-storage/async-storage`)    |
| Notifications      | `react-native-toast-message`                                  |
| Connectivity       | `@react-native-community/netinfo`                            |

## Repository Structure

```
mindful-eating-frontend/
├── assets/              # Fonts, images, static assets
├── component/           # Reusable UI components (Buttons, Inputs, Cards)
├── screens/             # Screen components for different flows
│   ├── auth/            # Auth: Register, Login, ForgotPassword
│   ├── initial/         # Onboarding: Survey, UserProfileSubmission
│   ├── dashboard/       # Home screen & ChatScreen
│   └── profile/         # Profile screens & behavior update
├── utils/               # Helper functions (API client, toastConfig)
├── App.js               # Root navigator & NetInfo check
├── index.js             # Expo entry point
├── app.json             # Expo configuration
├── eas.json             # EAS build settings
├── package.json         # Dependencies & scripts
└── .gitignore
```

## Environment Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/samshad/mindful-eating-frontend.git
   cd mindful-eating-frontend
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment**
   Create or update the `utils/config.js` file with your backend API URL.
   It should look something like this:

    ```javascript
   // utils/config.js
   export const BASE_URL = 'https://your-backend-api-url.com/api/v1'; // Replace with your actual backend URL
   // Add other global configurations here if needed
    ```
## Running the App

Launch the Expo development server:
```bash
npx expo start -c
```
- Press `i` to open on iOS simulator.
- Press `a` to open on Android emulator.
- Scan the QR code with Expo Go on mobile devices.

## Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `expo start`    | Start Metro bundler                  |
| `expo build`    | Build standalone binaries (legacy)   |
| `eas build`     | Run EAS build for iOS & Android      |
| `npm run lint`  | Lint codebase (if configured)        |
| `npm test`      | Run tests (if any are added)         |

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "Add my feature"`
4. Push branch: `git push origin feature/my-feature`
5. Open a Pull Request and describe your changes.

## Acknowledgements

This project was undertaken as a research project for my Master of Applied Computer Science program at Persuasive Computing Lab, Dalhousie University.

**Supervisors:** Dr. Rita Orji & Dr. Oladapo Oyebode

## Companion Backend Service
This frontend application communicates with the **Mindful Eating Backend** for data persistence, AI-powered tip generation, and business logic.
- **Backend Repository:** [samshad/mindful-eating-backend](https://github.com/samshad/mindful-eating-backend)

## License

This project is licensed under the GNU Affero General Public License v3.0.  
See the [LICENSE](LICENSE) file for details.  
© 2025 Md Samshad Rahman (Persuasive Computing Lab, Dalhousie University)
