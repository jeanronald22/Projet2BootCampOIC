import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	Image,
	Platform,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/TextInput/CustomTextInput';
import CustomButton from '../components/Button/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
	const screenDimension = Dimensions.get('screen');
	const navigation = useNavigation();
	// états
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});
	console.log(data);

	const onChangeText = (newText, field) => {
		setData({ ...data, [field]: newText });
	};
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == 'ios' ? 'position' : 'height'}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<View
						style={[
							{
								height: 0.5 * screenDimension.height,
							},
							Styles.imageContainer,
						]}
					>
						<Image
							source={require('../assets/images/login.png')}
							style={{ width: '80%', height: '80%' }}
						/>
					</View>
					{/* children */}

					<View
						style={[
							Styles.textContainer,
							{ height: 0.5 * screenDimension.height },
						]}
					>
						<CustomTextInput
							label="name"
							placeholder="John Doe"
							onChangeText={onChangeText}
						/>
						<CustomTextInput
							label="email"
							type="email-address"
							placeholder="John@doe.fr"
							onChangeText={onChangeText}
						/>
						<CustomTextInput
							label="password"
							placeholder="*********"
							onChangeText={onChangeText}
						/>
						<Text style={{ marginTop: 10 }}>Forget password ?</Text>
						<View style={{ width: '100%', marginTop: 5 }}>
							<CustomButton
								label="sing up"
								onClick={() =>
									navigation.navigate('Home', data)
								}
							/>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Login;
const Styles = StyleSheet.create({
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'red',
	},
	textContainer: {
		display: 'flex',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
});
