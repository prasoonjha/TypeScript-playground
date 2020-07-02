import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 0, -5]);
const charactersCollection = new CharactersCollection("hello!XD");
const linkedList = new LinkedList();
linkedList.add(-3);
linkedList.add(0);
linkedList.add(-7);
linkedList.add(10);

numbersCollection.data.sort();
console.log(numbersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

linkedList.sort();
linkedList.print();
