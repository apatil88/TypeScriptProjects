"use strict";
var Sorter_1 = require("./Sorter");
var NumbersCollections_1 = require("./NumbersCollections");
var numbersCollection = new NumbersCollections_1.NumbersCollection([50, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
