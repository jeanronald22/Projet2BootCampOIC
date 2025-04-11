import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../components/Button/CustomButton';
import { FontAwesome6 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
	// définition des dimensions de l'écran
	const screeDimension = Dimensions.get('screen');
	const navigation = useNavigation();
	return (
		<View>
			{/* image */}
			<View
				style={[
					{ height: 0.55 * screeDimension.height },
					Styles.imageContainer,
				]}
			>
				<Image
					source={require('../assets/images/welcome1.png')}
					style={{ width: '80%', height: '80%' }}
				/>
			</View>
			{/* texte */}
			<View
				style={[
					Styles.textContainer,
					{ height: 0.5 * screeDimension.height },
				]}
			>
				<Text
					style={[
						{ fontSize: 50, fontWeight: 'bold' },
						Styles.textColor,
					]}
				>
					Hello
				</Text>
				<Text
					style={[
						{
							fontSize: 18,
							fontWeight: 'regular',
							textAlign: 'center',
						},
						Styles.textColor,
					]}
				>
					Welcome to Little Drop, where you manage daily loTask
				</Text>
				<View style={{ width: '100%', marginVertical: 10 }}>
					<CustomButton
						label="login"
						onClick={() => navigation.navigate('Login')}
					/>
					<CustomButton type="outline" label="Sign up" />
				</View>
				<View
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={[Styles.textColor, { marginVertical: 4 }]}>
						Sign up using{' '}
					</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
						}}
					>
						<View
							style={[
								{ backgroundColor: 'blue' },
								Styles.ellipse,
							]}
						>
							<FontAwesome6
								name="facebook-f"
								size={24}
								color="white"
							/>
						</View>
						<View
							style={[{ backgroundColor: 'red' }, Styles.ellipse]}
						>
							<FontAwesome6
								name="google"
								size={24}
								color="white"
							/>
						</View>
						<View
							style={[
								{ backgroundColor: 'lightblue' },
								Styles.ellipse,
							]}
						>
							<FontAwesome6
								name="linkedin-in"
								size={24}
								color="white"
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Welcome;
const Styles = StyleSheet.create({
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		display: 'flex',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	textColor: {
		color: '#474746',
	},
	ellipse: {
		display: 'flex',
		width: 50,
		height: 50,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		margin: 10,
	},
});
