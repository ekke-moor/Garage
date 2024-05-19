```javascript
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Read the file into memory
const fileData = fs.readFileSync('LE.txt', 'utf8');
const rows = fileData.trim().split('\n');
const data = rows.map(row => row.split('\t'));

app.get('/data', (req, res) => {
  const { column, value } = req.query;
  let filteredData = data;

  if (column && value) {
    const columnIndex = column === '1' ? 0 : 1;
    filteredData = data.filter(row => row[columnIndex] === value);
  }

  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

```
