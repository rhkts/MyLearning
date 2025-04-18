//方法１

import jsonData from "./jsonData.json";

const data = jsonData;

console.log(data);

//方法２
// import fs from "fs";

// const fsData = fs.readFileSync("../jsonData.json", "utf-8");

// const data = JSON.parse(fsData); //戻り値はany型
