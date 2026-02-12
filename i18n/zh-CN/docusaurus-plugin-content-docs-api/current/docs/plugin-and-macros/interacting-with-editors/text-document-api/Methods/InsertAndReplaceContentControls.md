# 插入并替换内容控件

插入包含数据的内容控件。数据可以通过[文档](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/)的 JavaScript 代码指定，也可以通过共享文档的链接指定。

## 语法

```javascript
expression.InsertAndReplaceContentControls(arrDocuments);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrDocuments | 必需 | [内容控件属性和内容](../Enumeration/ContentControlPropertiesAndContent.md)[] | — | 内容控件的属性和内容数组。 |

## 返回值

[内容控件属性](../Enumeration/ContentControlProperties.md)[]

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
window.Asc.plugin.executeMethod ("InsertAndReplaceContentControls", [documents]);
```
