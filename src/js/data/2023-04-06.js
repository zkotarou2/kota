import {towaAAA} from './vtubers/towaAAA.js'

dataSetVersion = "2023-04-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
     {
         name: "Filter by vtubers",
         key: "singer",
         tooltip: "Check this to show songs containing these vtubers",
         checked: false,
         sub: [
             {name: "Tokoyami Towa", key: "Towa"},
             {name: "Hoshimachi Suisei", key: "Suisei"},
             {name: "Minato Aqua", key: "Aqua"},
         ]
     }
];

dataSet[dataSetVersion].characterData = [
    ...towaAAA
];
