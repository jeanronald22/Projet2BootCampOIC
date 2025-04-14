import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StatusBar, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import About from './screens/About';
import { MaterialIcons } from '@expo/vector-icons';

const Tabs = () => {
	const tabs = createBottomTabNavigator();
	return (
		<tabs.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = '';
					const iconSize = focused ? size + 5 : size;
					const iconColor = focused ? 'blue' : 'black';
					switch (route.name) {
						case 'Home':
							iconName = 'home';
							break;
						case 'settings':
							iconName = 'settings';
							break;
						case 'profile':
							iconName = 'person';
							break;
						case 'about':
							iconName = 'info';
							break;
						default:
							break;
					}
					return (
						<MaterialIcons
							name={iconName}
							size={iconSize}
							color={iconColor}
						/>
					);
				},
				tabBarLabel: ({ focused, color }) => {
					const labelColor = focused ? 'blue' : 'black';
					return (
						<Text style={{ color: labelColor }}>
							{route.name.charAt(0).toUpperCase() +
								route.name.slice(1)}
						</Text>
					);
				},
				headerShown: false,
			})}
		>
			<tabs.Screen name="Home" component={Home} />
			<tabs.Screen name="settings" component={Settings} />
			<tabs.Screen name="profile" component={Profile} />
			<tabs.Screen name="about" component={About} />
		</tabs.Navigator>
	);
};
export default function App() {
	const stack = createNativeStackNavigator();

	return (
		// <SafeAreaView>
		<>
			<NavigationContainer>
				<stack.Navigator screenOptions={{ headerShown: false }}>
					<stack.Screen name="Welcome" component={Welcome} />
					<stack.Screen name="Login" component={Login} />
					<stack.Screen name="MyTabs" component={Tabs} />
				</stack.Navigator>
			</NavigationContainer>
		</>
		// 	<StatusBar barStyle="default" />
		// </SafeAreaView>
	);
}
