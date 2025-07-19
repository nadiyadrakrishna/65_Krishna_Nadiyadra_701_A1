var fs = require('fs');

fs.writeFile('example.txt', 'Hello from fs module!', function(err) {
    if (err) throw err;
    console.log('File created.');

    fs.appendFile('example.txt', '\nAppended line.', function(err) {
        if (err) throw err;
        console.log('Line appended.');

        fs.readFile('example.txt', 'utf8', function(err, data) {
            if (err) throw err;
            console.log('File data:\n' + data);

            fs.rename('example.txt', 'newfile.txt', function(err) {
                if (err) throw err;
                console.log('File renamed.');

                fs.unlink('newfile.txt', function(err) {
                    if (err) throw err;
                    console.log('File deleted.');
                });
            });
        });
    });
});
