import fs from "fs";
import { countLinesInDir } from "slocjs";

const lines = countLinesInDir("../src");
console.log(lines);

fs.readFile("sloc.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  if (!data) {
    data = "[]";
  }
  const json = JSON.parse(data);
  console.log(json);

  json.push({
    date: new Date().toISOString(),
    lines: lines,
  });

  fs.writeFile("sloc.json", JSON.stringify(json), "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
