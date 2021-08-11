fs = require('fs');

var routes = [];
var result = [];
var temp = [];
var temp1 = [];
fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('read error');
        return;
    }
    routes = JSON.parse(data).sections[0]['routes'];
    routes.forEach((each) => {
        if (each.sourcePath.includes(':')) { temp.push(each); }
        if (!each.sourcePath.includes(':')) { temp1.push(each); }
    });
    var result = temp1.concat(temp);
    console.log(JSON.stringify(result));
})
