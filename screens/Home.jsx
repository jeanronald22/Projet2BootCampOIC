import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ route }) => {
	const [openDialog, setOpenDialog] = useState(true);

	return (
		<View
			style={[
				styles.container,
				{
					opacity: openDialog ? 0.5 : 1,
				},
			]}
		>
			{openDialog && (
				<View style={styles.dialogBox}>
					<Text style={styles.dialogText}>
						Welcome {route.params.name} 🔥
					</Text>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={() => setOpenDialog(false)}
					>
						<Text style={styles.closeButtonText}>Close</Text>
					</TouchableOpacity>
				</View>
			)}
			{/* Other content */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
	},
	dialogBox: {
		position: 'absolute',
		top: '40%',
		width: '80%',
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 10,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		alignItems: 'center',
	},
	dialogText: {
		fontSize: 16,
		color: '#333',
		marginBottom: 15,
		textAlign: 'center',
	},
	closeButton: {
		backgroundColor: '#007BFF',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	closeButtonText: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
	},
});

export default Home;
