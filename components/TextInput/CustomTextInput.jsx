import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import React from 'react';

const CustomTextInput = ({ label, type, placeholder, value, onChangeText }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.textInput}
				keyboardType={type}
				placeholder={placeholder}
				value={value}
				onChangeText={(newText) => onChangeText(newText, label)}
			/>
		</View>
	);
};

export default CustomTextInput;
const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'red',
		width: '100%',
		marginVertical: 4,
		padding: 10,
	},
	label: {
		textTransform: 'capitalize',
		fontSize: 18,
		fontWeight: 'regular',
		marginBottom: 8,
		color: '#474746',
		marginLeft: 5,
	},
	textInput: {
		borderColor: '#474746',
		borderWidth: 1,
		color: '#474746',
		paddingVertical: Platform.OS == 'ios' ? 12 : 10,
		borderRadius: 10,
		paddingHorizontal: 10,
	},
});
