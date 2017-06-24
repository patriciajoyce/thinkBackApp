import { createRouter } from '@expo/ex-navigation';

import HomeScreen from './screens/home.js';
import ActivityScreen from './screens/activities.js';
import DescriptionOne from './games/NameThatItem/description.js';
import Categories from './games/NameThatItem/choose.js';

export default createRouter(() => ({
  home: () => HomeScreen,
  activities: () => ActivityScreen,
  namethatitem: () => DescriptionOne,
  choose: () => Categories, 

}));
