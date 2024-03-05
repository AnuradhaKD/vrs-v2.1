const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/search', async (req, res) => {
  const query = req.body.query;

  try {
    const results = await searchWebsites(query);
    res.json(results);
  } catch (error) {
    console.error('Error searching websites:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function searchWebsites(query) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const darazResults = await searchDaraz(page, query);
  const ikmanResults = await searchIkman(page, query);
  const aliExpressResults = await searchAliExpress(page, query);

  await browser.close();

  return {
    daraz: darazResults,
    ikman: ikmanResults,
    aliExpress: aliExpressResults,
  };
}

// Implement search functions as shown in the previous example

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
