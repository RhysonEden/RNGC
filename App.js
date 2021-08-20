import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import GuideScreen from "./src/screens/GuideScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Guides: GuideScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Guardian Connect",
    },
  }
);

export default createAppContainer(navigator);
