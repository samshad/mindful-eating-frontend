// -----------------------------------------------------------------------------
// Project: Mindful Eating (React Native Frontend)
// Author: Md Samshad Rahman
// Year: 2025
// License: GNU Affero General Public License v3.0 (See LICENSE file for details)
// Description: This file is part of the Mindful Eating project.
// -----------------------------------------------------------------------------
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
