import Command from './Command';
import IteratorList from './IteratorList';
import {orderByAge, orderByChildren, orderByName} from './orderFunctions';
import Person from './Person';


export class OrderByNameCommand implements Command {
    public constructor(private list: IteratorList<Person>) {
    }

    execute(): void {
        console.log('Command: Order by name');
        orderByName(this.list).forEach(person => {
            console.log(`${person}`);
        })
    }
}

export class OrderByAgeCommand implements Command {
    public constructor(private list: IteratorList<Person>) {
    }

    execute(): void {
        console.log('Command: Order by age');
        orderByAge(this.list).forEach(person => {
            console.log(`${person}`);
        })
    }
}

export class OrderByChildrenCommand implements Command {
    public constructor(private list: IteratorList<Person>) {
    }

    execute(): void {
        console.log('Command: Order by children');
        orderByChildren(this.list).forEach(person => {
            console.log(`${person}`);
        })
    }
}
