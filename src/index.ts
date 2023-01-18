import Person from "./Person";
import IteratorPersons from "./IteratorPersons";
import {OrderByAgeCommand, OrderByChildrenCommand, OrderByNameCommand} from "./orderCommands";

const person1 = new Person('person 1', 'surname 1', 11, 4);
const person2 = new Person('person 2', 'surname 2', 2, 1);
const person3 = new Person('person 3', 'surname 3', 32, 2);
const person4 = new Person('person 4', 'surname 4', 4, 0);
const person5 = new Person('person 4', 'surname 5', 34, 3);

const personIter = new IteratorPersons([person5, person3, person2, person4, person1]);

function executeACommand(): void {
    console.log('Select order type: name, age or children number');

    process.stdin.on('data', (data) => {
        const commandName = data.toString().trim();

        switch (commandName) {
            case 'name':
                new OrderByNameCommand(personIter).execute();
                break;

            case 'age':
                new OrderByAgeCommand(personIter).execute();
                break;

            case 'children':
                new OrderByChildrenCommand(personIter).execute();
                break;

            default:
                console.error('Invalid input')
                executeACommand();
                return;
        };

        process.exit();
    });
}

executeACommand();

