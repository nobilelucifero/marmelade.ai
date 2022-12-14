// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const industry = req.body.industry;
  const style = req.body.style;
  //Find the absolute path of the json directory
  // const jsonDirectory = path.join(process.cwd(), `data/${industry}`);
  let jsonDirectory = path.join(process.cwd(), `data`);
  //Read the json data file data.json
  let fileContents = await fs.readFile(
    jsonDirectory + "/" + industry + "/" + style + ".json",
    { encoding: "utf8", flag: "r" }
  );
  //Return the content of the data file in json format
  if (req.method === "GET") {
    res.status(200).json(fileContents);
  } else if (req.method === "POST") {
    // res.status(200).json(req.body.industry);
    res.status(200).json(fileContents);
    // console.log("look at me~!", jsonDirectory);
  }
}
