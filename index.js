var fs = require('fs')
var path = require('path');

var youyanComment = [{
    su: "",
    url: "http://d.com/a.html",
    title: "测试一下，你就知道",
    content: "c",
    time: "2012-10-09 10:40:29",
    uname: "test",
    email: "zhangsan@sina.com",
    ulink: "http://blog.jiathis.com",
    status: "0",
    child: [
        {
            content: "@test: e",
            time: "2012-10-09 10:40:51",
            uname: "test",
            email: "zhangsan@sina.com",
            ulink: "http://blog.jiathis.com",
            status: "0"
        },
        {
            content: "@test: d",
            time: "2012-10-09 10:40:37",
            uname: "test",
            email: "zhangsan@sina.com",
            ulink: "http://blog.jiathis.com",
            status: "0"
        }
    ]
}
]
var duoshuoComment = {
    generator: "duoshuo",
    version: "0.1",
    threads: [
        {
            site_id: "1130416",
            thread_id: "6254868783102427906",
            created_at: "2016-02-24T22:45:24+08:00",
            updated_at: "2016-02-24T22:45:24+08:00",
            likes: 1,
            views: 0,
            thread_key: "hexo-guide-1",
            title: "Hexo\u535a\u5ba2\u642d\u5efa\u6559\u7a0b\uff08\u4e00\uff09\uff1aHexo\u4ecb\u7ecd\u53ca\u642d\u5efa",
            url: "http:\/\/yoursite.com\/2016\/02\/21\/hexo-guide-1\/",
            author_key: "",
            author_id: 0
        }
    ],
    posts: [
        {
            post_id: "6398332881986388737",
            thread_id: 6360195363562849026,
            message: "\u591a\u8c22\u63d0\u9192\uff0c\u5df2\u66f4\u6539",
            site_id: "1130416",
            created_at: "2017-03-17T13:19:23+08:00",
            updated_at: "1970-01-01T08:00:00+08:00",
            likes: 0,
            ip: "101.81.91.9",
            parents: [
                6397919778069021441
            ],
            author_id: 6254867050708075265,
            author_email: "qq673318522@163.com",
            author_name: "66_\u8d85\u4eba",
            author_url: "http:\/\/www.iamsuperman.cn\/",
            author_key: null,
            thread_key: "about\/index.html",
            post_key: "6398332881986388737"
        },
    ]
}

const ConvertUtil = {
    DUOSHUO_JSON_URL: 'data/duoshuo_comment_export.json',
    YOUYAN_JSON_URL: 'data/youyan_comment_data.json',
    convert() {
        this.readFromFile()
    },
    readFromFile() {
        let duoshuoData;
        fs.readFile('data/duoshuo_comment_export.json', (err, data) => {
            if (err) throw err;
            let threads = data.threads;
            let posts = data.posts;
            this.writeToFile(data)
        })
    },
    writeToFile(data) {
        fs.writeFileSync('data/youyan_comment_convert.json', data, 'utf-8',err => {
            if (err) throw err;
            console.log('success');
        })
    }
}

ConvertUtil.convert()


