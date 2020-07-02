import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 0, -5]);
const charactersCollection = new CharactersCollection("hello!XD");

const arraySorter = new Sorter(numbersCollection);
const stringSorter = new Sorter(charactersCollection);

arraySorter.sort();
stringSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
