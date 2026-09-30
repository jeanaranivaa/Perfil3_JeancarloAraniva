import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DragonBallScreen from '../screens/DragonBallScreen';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio', tabIcon: 'person-outline' }}
      />
      <Tab.Screen
        name="DragonBall"
        component={DragonBallScreen}
        options={{ title: 'API Dragon Ball', tabIcon: 'flash-outline' }}
      />
    </Tab.Navigator>
  );
}
