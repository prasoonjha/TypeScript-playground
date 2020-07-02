import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 0, -5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
