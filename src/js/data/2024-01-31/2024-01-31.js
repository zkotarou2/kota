import {towaAAA} from './vtubers/towaAAA.js'
import {animeOpenings} from "./misc/animeOps.js";
import {animeEndings} from "./misc/animeEds.js";

dataSetVersion = "2024-01-31"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].characterData = [
    ...animeEndings
];
