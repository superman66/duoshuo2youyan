var fs = require('fs')
const DUOSHUO_JSON_URL = 'data/duoshuo_comment_export.json',
    YOUYAN_JSON_URL = 'data/youyan_comment_data.json';

fs.readFile(DUOSHUO_JSON_URL, function (err, data) {
    if (err) {
        throw err;
    };
    let jsonObject = JSON.parse(data);
    console.log(jsonObject)
})

function writeToYouyuanJSON(data){

}