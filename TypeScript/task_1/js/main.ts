export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

interface Directors extends Teacher {
	numberOfreports: number;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`
}

export interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

export class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}