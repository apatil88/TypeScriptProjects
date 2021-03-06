import { NumbersCollection } from "./NumbersCollections";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-100);
linkedList.add(5);
linkedList.add(0);
linkedList.add(200);

linkedList.sort();
linkedList.print();
