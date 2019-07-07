import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollections";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(charactersCollection.data);
