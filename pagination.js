const data = [
  { sn: "00002356517", name:'Valuveljed' },
  { sn: "00002356518", name:'BMV handbook' },
  { sn: "00002356519", name:'Honda handbook' }
];

const pageSize = 2; // Number of items per page

app.get('/api/spare-parts', (req, res) => {
  const pageNumber = req.query.page || 1; // Get the current page number from the query parameters
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const spare-parts = data.slice(startIndex, endIndex);

  res.json({
    spare-parts,
    total: data.length,
    totalPages: Math.ceil(data.length / pageSize),
    currentPage: pageNumber
  });
});
