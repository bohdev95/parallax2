import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

export default async function handler (req: NextApiRequest,
    res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        
        // Get the file path to the profiles.json file
        const filePath = path.join(process.cwd(), 'public', 'data', 'profiles.json');
        // Read the contents of the profiles.json file
        const jsonData = fs.readFileSync(filePath, 'utf-8');

        // Parse the JSON data into an object
        const data = JSON.parse(jsonData);

        // Get the profiles array from the data object
        const profiles = data.profiles;

        // Select a random profile from the array
        const randomIndex = Math.floor(Math.random() * profiles.length);
        const randomProfile = profiles[randomIndex];

        res.status(200).json(randomProfile);
        
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      
        break
    default:
      res.status(400).json({ success: false })
      break
  }
}