# onDocumentContentReady

当文档完全加载时调用的函数。

## 参数

此事件没有参数。

```javascript
window.Asc.plugin.attachEditorEvent("onDocumentContentReady", () => {
    let oProperties = {
        "searchString"  : "ONLYOFFICE",
        "replaceString" : "ONLYOFFICE is cool",
        "matchCase"     : false
    };

    window.Asc.plugin.executeMethod("SearchAndReplace", [oProperties], function() {
            window.Asc.plugin.executeCommand("close", "");
    });
});
```

