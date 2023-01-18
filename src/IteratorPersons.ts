import Person from './Person';
import IteratorList from './IteratorList';

export default class IteratorPersons implements IteratorList<Person> {

    private index: number = 0;

    public constructor(private list: Person[]) {
    }

    next(): Person {
        return this.list[this.index++];
    }

    hasMore(): boolean {
        return this.index < this.list.length;
    }

    current(): Person {
        return this.list[this.index];
    }

    reset(): void {
        this.index = 0;
    }
}

