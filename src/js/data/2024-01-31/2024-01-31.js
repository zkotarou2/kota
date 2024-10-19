import {songs} from "./misc/songs.js";

dataSetVersion = "2024-10-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by type of songs",
        key: "singer",
        tooltip: "Check this to show songs",
        checked: true,
        sub: [
            {name: "INS", key: "INS", checked: true},
            {name: "OP", key: "OP", checked: true},
            {name: "ED", key: "ED", checked: true}
        ]
    }
];

dataSet[dataSetVersion].characterData = [
    ...songs
];
