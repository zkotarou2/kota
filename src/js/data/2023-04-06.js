dataSetVersion = "2023-04-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by vtubers",
        key: "vtuber",
        tooltip: "Check this to only sort by artists",
        checked: false,
        sub: [
            {name: "Yatogami Towa", key: "towa"},
            {name: "Hoshimachi Suisei", key: "suisei"},
            {name: "Minato Aqua", key: "aqua"}
        ]
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Asu no Yozora Shoukaihan",
        /*embedLink: "https://www.youtube.com/embed/XpgSrULHibg"*/
        img: "c5DqpgX.png",
        opts: {
            singer: ["towa", "aqua", "suisei"]
        }
    },
    {
        name: "Haiiro to ao",
/*        embedLink: "https://www.youtube.com/embed/0firv69LkgI"*/
        img: "tJnkSzK.png",
        opts: {
            singer: ["towa", "suisei"]
        }
    },
    {
        name: "Akuma",
  /*      embedLink: "https://www.youtube.com/embed/F1_OQXNF8b8"*/
        img: "0YT7QlS.png",
        opts: {
            singer: ["towa"]
        }
    },
    {
        name: "brilliant",
   /*     embedLink: "https://www.youtube.com/embed/2D0B3wTjE20"*/
        img: "NWlZud3.png",
        opts: {
            singer: ["towa"]
        },
    },
];
