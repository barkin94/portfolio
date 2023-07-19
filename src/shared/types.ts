export type Coordinates = {
	x: number;
	y: number;	
}

export interface IInteractable {
	collisionZone: number
}

export interface Entity {
	x: number;
	y: number;
	name: string|null;
}