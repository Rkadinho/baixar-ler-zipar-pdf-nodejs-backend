var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('Padrão Tiss Atualizado 2021-11.csv');
var out = fs.createWriteStream('Padrão Tiss Atualizado 2021-11.csv.gz');

inp.pipe(gzip).pipe(out);