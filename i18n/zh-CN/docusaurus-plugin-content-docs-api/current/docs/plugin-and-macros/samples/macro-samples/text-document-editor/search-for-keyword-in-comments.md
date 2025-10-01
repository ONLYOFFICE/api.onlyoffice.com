# 搜索注释中的关键字

将包含指定关键字的文档注释标记为已解决。

```ts
(function () {
    let doc = Api.GetDocument();
    let comments = doc.GetAllComments();
    
    // 定义要搜索的关键字
    let keyword = "solve"; 

    // 切换是否区分大小写：
    // 如果不区分大小写，取消注释下一行：
    // let keywordLower = keyword.toLowerCase();

    // 遍历每条注释
    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];
        let commentText = comment.GetText();

        // 如果定义了 keywordLower，则进行不区分大小写的匹配
        if (typeof keywordLower !== "undefined") {
            if (commentText.toLowerCase().indexOf(keywordLower) !== -1) {
                comment.SetSolved(true); // 标记为已解决
            }
        } else {
            // 否则进行区分大小写的匹配
            if (commentText.indexOf(keyword) !== -1) {
                comment.SetSolved(true); // 标记为已解决
            }
        }
    }
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllComments](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllComments.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiComment/Methods/GetText.md), [SetSolved](../../../../office-api/usage-api/text-document-api/ApiComment/Methods/SetSolved.md)

## 结果

![CommentWordSearch](/assets/images/plugins/comment-word-search.png#gh-light-mode-only)
![CommentWordSearch](/assets/images/plugins/comment-word-search.dark.png#gh-dark-mode-only)
