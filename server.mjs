import express from 'express';
import fetch from 'node-fetch';

const app = express();

const TOKEN = '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';

app.get('/api/tags/:owner/:repo', (req, res) => {
  const { owner, repo } = req.params;
  fetch(`https://api.github.com/repos/${owner}/${repo}/tags`, {
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((tags) => res.json(tags))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error retrieving tags from GitHub API');
    });
    console.log("response - tags ==> 22", res)
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
