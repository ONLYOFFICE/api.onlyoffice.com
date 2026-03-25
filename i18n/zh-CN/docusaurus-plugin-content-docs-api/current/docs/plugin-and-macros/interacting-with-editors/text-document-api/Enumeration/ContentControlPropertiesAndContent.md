# ContentControlPropertiesAndContent

内容控件的属性和内容。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| ContentControlProperties | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | 内容控件属性。 |
| Script | string | 将执行以生成内容控件中数据的脚本（可以用 *Url* 参数替换）。 |
| Url | string | 共享文件的链接（可以用 *Script* 参数替换）。 |
## 类型

Object



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
