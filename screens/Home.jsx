import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	StatusBar,
	ActivityIndicator,
	FlatList,
	Image,
	TextInput,
} from 'react-native';
import useFetch from '../common/hooks/useFetch';
import CustomTextInput from '../components/TextInput/CustomTextInput';

const Home = ({ route }) => {
	const {
		data: PokemonList,
		loading,
		error,
	} = useFetch({
		url: 'https://pokeapi.co/api/v2/pokemon?limit=500',
	});

	const [pokemonFilter, setPokemonFilter] = useState([]);
	const [pokemonName, setPokemonName] = useState('');
	useEffect(() => {
		if (PokemonList) {
			if (pokemonName) {
				const filtered = PokemonList.results.filter((pokemon) =>
					pokemon.name
						.toLowerCase()
						.includes(pokemonName.toLowerCase())
				);
				setPokemonFilter(filtered);
			} else {
				setPokemonFilter(PokemonList.results);
			}
		}
	}, [pokemonName, PokemonList]);
	if (loading) {
		return <Text>loading...</Text>;
	}
	if (error) {
		return <Text>Error....</Text>;
	}

	return (
		<SafeAreaView>
			<Text style={styles.headerTxt}>Pokémon List</Text>
			<View>
				<TextInput
					value={pokemonName}
					onChangeText={(newText) => setPokemonName(newText)}
					style={{
						width: '100%',
						borderWidth: 2,
						borderColor: 'red',
					}}
				/>
			</View>
			<FlatList
				horizontal={false}
				numColumns={2}
				data={pokemonFilter}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => {
					return (
						<View style={styles.pokemonCard}>
							<Image
								style={styles.pokemonImage}
								source={{
									uri: `https://img.pokemondb.net/artwork/${item.name}.jpg`,
								}}
							/>
							<Text style={styles.pokemonName}>{item.name}</Text>
						</View>
					);
				}}
				contentContainerStyle={{
					paddingBottom: 16,
				}}
			/>
			<StatusBar barStyle="default" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
	},
	headerTxt: {
		textAlign: 'center',
		fontSize: 30,
	},
	pokemonImage: {
		width: 100,
		height: 100,
		objectFit: 'contain',
	},
	pokemonCard: {
		flex: 1,
		margin: 8,
		backgroundColor: '#FFF',
		borderRadius: 10,
		alignItems: 'center',
		padding: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	pokemonName: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#333',
		marginTop: 8,
		textAlign: 'center',
	},
});

export default Home;
