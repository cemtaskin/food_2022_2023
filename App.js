import { createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import ResultsShowScreen from "./screens/ResultsShowScreen";
import SearchScreen from "./screens/SearchScreeen";

const navigator = createStackNavigator(
  {
      Search : SearchScreen,
      ResultsShow : ResultsShowScreen
  },
  {
    initialRouteName : 'Search',
    defaultNavigationOptions : {
    title : 'Business Search'
    }
  }
);

export default createAppContainer(navigator);


