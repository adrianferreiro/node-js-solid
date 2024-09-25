
export abstract class Vehicle {
    // getNumberOfSeats(): number {
    //     throw Error('Método no implementado.');
    // }
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }


}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ferrari extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}


