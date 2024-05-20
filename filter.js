var _ = require("underscore");

var data = JSON.parse(json);

var filtered = _.where(data, {sn: "00002356517"});

// => [{sn: "00002356517", name: "Valuveljed"});
