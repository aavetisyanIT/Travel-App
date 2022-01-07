import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, FieldResolver } from 'type-graphql';

@ObjectType({ description: 'Destination or place of interest' })
@Entity()
export class Place extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	title: string;

	@Field({
		nullable: true,
		description: 'The place description',
	})
	@Column()
	description: string;

	@Field({
		nullable: true,
		description: 'The Image Url',
	})
	@Column()
	imageUrl?: string;

	@Field({ nullable: true })
	@Column()
	creationDate?: Date;
}
