import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { Place } from './entity/Place';

async function bootstrap() {
	// get options from ormconfig.js
	const dbOptions = await getConnectionOptions(
		process.env.NODE_ENV || 'development',
	);
	createConnection({ ...dbOptions, name: 'default' })
		.then(async connection => {
			console.log('Inserting a new place into the database...');
			const place = new Place();
			place.title = 'New York';
			place.description = 'The Big Apple';
			place.imageUrl =
				'https://images.unsplash.com/photo-1485738422979-f5c462d49f74';
			place.creationDate = new Date();
			await connection.manager.save(place);
			console.log('Saved a new place with id: ' + place.id);

			console.log('Loading places from the database...');
			const places = await connection.manager.find(Place);
			console.log('Loaded places: ', places);

			console.log(
				'Here you can setup and run express/koa/any other framework.',
			);
		})
		.catch(error => console.log(error));
}
bootstrap();
