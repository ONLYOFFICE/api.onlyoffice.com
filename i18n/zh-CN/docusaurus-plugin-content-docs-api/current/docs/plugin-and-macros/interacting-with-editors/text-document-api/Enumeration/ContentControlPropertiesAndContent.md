# 内容控件的属性及内容

内容控件的属性及内容。

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ----------- |
| ContentControlProperties | [内容控件属性](../Enumeration/ContentControlProperties.md) | 内容控件的属性。 |
| Script | string | 用于生成内容控件内部数据的脚本（可与 *Url* 参数二选一）。 |
| Url | string | 指向共享文件的链接（可与 *Script* 参数二选一）。 |
## 类型

Object（对象）



## 示例

```javascript
let documents = [{
    "Props": {
        "Id": 100,
        "Tag": "CC_Tag",
        "Lock": 3
    },
    "Script": "var oParagraph = Api.CreateParagraph();oParagraph.AddText('Hello world!');Api.GetDocument().InsertContent([oParagraph]);"
}];
window.Asc.plugin.executeMethod("InsertAndReplaceContentControls", [documents]);
```
