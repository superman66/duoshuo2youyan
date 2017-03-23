# 多说评论转为友言格式
将多说评论导出的json转换为符合友言格式的json

## 多说评论字段解释
threads是文章记录，属性如下；

* thread_id 多说文章ID。
* thread_key 文章在当前站点中的唯一表示符，例如文章ID。
* title 文章的标题。
* url 文章链接。
* author_key 文章作者在本站的ID。
* author_id 文章作者的多说ID，如果为空，说明发表文章时没有登陆多说账号。
* likes 文章被点【赞】的次数。
* views 文章浏览数。

posts是来自多说的评论，不包括微博、以删除评论、垃圾评论；

* post_id 多说评论ID。
* thread_id 这条评论对应的文章记录。
* message 评论内容。
* created_at 评论发表时间。
* author_id 作者在多说的id。空表示匿名用户。
* author_name 作者显示名。有可能为空。
* author_email 作者邮箱。有可能为空。
* author_url 作者填写的URL。有可能为空。
* ip 作者的IP地址。

完整数据如下：
```json
{
     "generator": "duoshuo",
     "version": "0.1",
     "threads": [
        {
            "site_id": "1130416",
            "thread_id": "6254868783102427906",
            "created_at": "2016-02-24T22:45:24+08:00",
            "updated_at": "2016-02-24T22:45:24+08:00",
            "likes": 1,
            "views": 0,
            "thread_key": "hexo-guide-1",
            "title": "Hexo\u535a\u5ba2\u642d\u5efa\u6559\u7a0b\uff08\u4e00\uff09\uff1aHexo\u4ecb\u7ecd\u53ca\u642d\u5efa",
            "url": "http:\/\/yoursite.com\/2016\/02\/21\/hexo-guide-1\/",
            "author_key": "",
            "author_id": 0
        }
     ],
     "posts": [
         {
            "post_id": 6258633233525637889,
            "thread_id": 6258624473210028802,
            "message": "\u597d\u68d2\u8bf6",
            "site_id": "1130416",
            "created_at": "2016-03-06T02:13:24+08:00",
            "updated_at": "1970-01-01T08:00:00+08:00",
            "likes": 0,
            "ip": "223.104.4.151",
            "parents": null,
            "author_id": 6258633197882442497,
            "author_email": null,
            "author_name": "\u738b\u5c0f\u50b2",
            "author_url": "javascript:void(0)",
            "author_key": 0,
            "thread_key": "reading-list-2016",
            "post_key": "6258633233525637889"
        }
        ],
}
```
## 友言评论字段解释

* su: 自定义页面标识 (如果定义了页面标识则填写，未定义则留空)
* url: 页面地址 (su或者url必选一个)
* title: 页面标题 (非必选)
* content: 评论内容 (必选)
* time: 评论时间 (如果没有时间可以不用填写，但是强烈建议填写，以便评论排序)
* uname: 昵称 (必选)
* email: 邮箱地址 (非必选)
* ulink: 个人主页链接地址 (非必选)
* status: 评论状态： 0：正常, 1：待验证, 2：垃圾，3：已被删除 (非必选，默认是正常评论)
* child: 子评论，格式和父级评论大致相同，但是子集评论无更下一级的评论 (包括content，time，uname，email，ulink，status) 

完整数据如下：
```json
[
  {
    "su": "",
    "url": "http://d.com/a.html",
    "title": "测试一下，你就知道",
    "content": "c",
    "time": "2012-10-09 10:40:29",
    "uname": "test",
    "email": "zhangsan@sina.com",
    "ulink": "http://blog.jiathis.com",
    "status": "0",
    "child": [
      {
        "content": "@test: e",
        "time": "2012-10-09 10:40:51",
        "uname": "test",
        "email": "zhangsan@sina.com",
        "ulink": "http://blog.jiathis.com",
        "status": "0"
      },
      {
        "content": "@test: d",
        "time": "2012-10-09 10:40:37",
        "uname": "test",
        "email": "zhangsan@sina.com",
        "ulink": "http://blog.jiathis.com",
        "status": "0"
      }
    ]
  }
]
```