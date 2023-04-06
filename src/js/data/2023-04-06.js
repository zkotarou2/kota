import {towaAAA} from './vtubers/towa.js'

dataSetVersion = "2023-04-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by vtubers",
        key: "singer",
        tooltip: "Check this to show songs containing these vtubers",
        checked: false,
        sub: [
            {name: "Yatogami Towa", key: "towa"},
            {name: "Hoshimachi Suisei", key: "suisei"},
            {name: "Minato Aqua", key: "aqua"}
        ]
    }
];

dataSet[dataSetVersion].characterData = [
    ...towaAAA
];
