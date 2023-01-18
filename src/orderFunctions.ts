import IteratorList from "./IteratorList";
import Person from "./Person";

type OrderFunction<T> = (itemA: T, itemB: T) => -1|0|1;

function orderBy<T>(list: IteratorList<T>, func: OrderFunction<T>): T[] {
    const arrayList: T[] = [];

    while (list.hasMore()) {
        arrayList.push(list.current());
        list.next();
    }

    return arrayList.sort(func);
}


export function orderByName(list: IteratorList<Person>): Person[] {
    const compareByName: OrderFunction<Person> = (itemA, itemB) => {
        if (itemA.completeName() === itemB.completeName()) {
            return 0;
        }

        if (itemA.completeName() < itemB.completeName()) {
            return -1;
        }

        return 1;
    }

    return orderBy<Person>(list, compareByName);
}

export function orderByAge(list: IteratorList<Person>): Person[] {
    const compareByAge: OrderFunction<Person> = (itemA, itemB) => {
        if (itemA.age === itemB.age) {
            return 0;
        }

        if (itemA.age < itemB.age) {
            return -1;
        }

        return 1;
    }

    return orderBy<Person>(list, compareByAge);
}

export function orderByChildren(list: IteratorList<Person>): Person[] {
    const compareByChildren: OrderFunction<Person> = (itemA, itemB) => {
        if (itemA.children === itemB.children) {
            return 0;
        }

        if (itemA.children < itemB.children) {
            return -1;
        }

        return 1;
    }

    return orderBy<Person>(list, compareByChildren);
}
