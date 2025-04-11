import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {
	const stack = createNativeStackNavigator();
	return (
		// <SafeAreaView>
		<NavigationContainer>
			<stack.Navigator screenOptions={{ headerShown: false }}>
				<stack.Screen name="Welcome" component={Welcome} />
				<stack.Screen name="Login" component={Login} />
				<stack.Screen name="Home" component={Home} />
			</stack.Navigator>
		</NavigationContainer>
		// 	<StatusBar barStyle="default" />
		// </SafeAreaView>
	);
}
