import SubPageScreen from '../screens/SubPageScreen';
import EmptyScreen from '../screens/EmptyScreen';
import WidePageScreen from '../screens/WidePageScreen';
import CenteredScreen from '../screens/CenteredScreen';
import PageListingScreen from '../screens/PageListingScreen';

import TextModule from '../components/Text';
import ImageModule from '../components/Image';

export const templates = {
  '91.484d9c7317ce4f0e1b68b3': CenteredScreen,
  '91.484d9c7317ce4f0e1b68ad': SubPageScreen,
  '91.484d9c7317ce4f0e1b68b8': EmptyScreen,
  '91.484d9c7317ce4f0e1b6954': WidePageScreen,
  '91.484d9c7317ce4f0e1b6946': PageListingScreen,
};

export const components = {
  image: ImageModule,
  text: TextModule,
};

export default {templates, components};
