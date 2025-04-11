import { Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

const CustomButton = ({ label = ' Click', onClick, type = 'contained' }) => {
	const [click, setClick] = useState(false);
	return (
		<Pressable
			onPress={onClick}
			style={[
				Styles.button,
				type === 'contained' ? Styles.contained : Styles.outline,
				{
					opacity: click ? 0.5 : 1,
				},
			]}
			onPressIn={() => setClick(true)}
			onPressOut={() => setClick(false)}
		>
			<Text
				style={[
					Styles.buttonText,
					type === 'contained'
						? Styles.containedText
						: Styles.outlineText,
				]}
			>
				{label}
			</Text>
		</Pressable>
	);
};

export default CustomButton;
const Styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginVertical: 10,
	},
	buttonText: {
		textTransform: 'capitalize',
		fontSize: 18,
		textAlign: 'center',
	},
	contained: {
		backgroundColor: '#407BFF',
	},
	outline: {
		borderColor: '#407BFF',
		borderWidth: 2,
	},
	containedText: {
		color: 'white',
	},
	outlineText: {
		color: '#407BFF',
	},
});
