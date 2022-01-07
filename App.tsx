import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { CardView } from './src/components';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#3498db',
		accent: '#f1c40f',
	},
};

const trip1 = {
	title: 'Sundown Town',
	description: 'Awaiting daybreak',
	imageUrl: 'https://i.picsum.photos/id/695/700/700.jpg',
	user: null,
	onPress: null,
};

const trip2 = {
	title: 'The Stars',
	description: 'Astro vigil',
	imageUrl: 'https://i.picsum.photos/id/683/701/701.jpg',
	user: null,
	onPress: null,
};

const trip3 = {
	title: 'Coastal Cruise',
	description: 'Serene scene',
	imageUrl: 'https://i.picsum.photos/id/51/701/701.jpg',
	user: null,
	onPress: null,
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<CardView {...trip1} />
				<CardView {...trip2} />
				<CardView {...trip3} />
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	contentContainer: {
		paddingVertical: 40,
	},
});
