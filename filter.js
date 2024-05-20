var _ = require("underscore");

var data = JSON.parse(json);

var filtered = _.where(data, {name: "a"});

// => [{sn: "a", name: 20}]
