import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AuthLoyaout = ({ url, children }) => {
	const screeDimension = Dimensions.get('screen');
	return (
		<View>
			{/* image */}
			<View
				style={[
					{ height: 0.55 * screeDimension.height },
					styles.imageContainer,
				]}
			>
				style={{ width: '80%', height: '80%' }}
				<Image src={url} />
			</View>
			{/* children */}
			<View>{children}</View>
		</View>
	);
};

export default AuthLoyaout;

const styles = StyleSheet.create({
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
