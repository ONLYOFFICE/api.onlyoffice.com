# InsertAndReplaceContentControls

插入包含数据的内容控件。数据由 [Document](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/) 的 JS 代码指定，或通过共享文档的链接指定。

## 语法

```javascript
expression.InsertAndReplaceContentControls(arrDocuments);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrDocuments | 必需 | [ContentControlPropertiesAndContent](../Enumeration/ContentControlPropertiesAndContent.md)[] |  | 内容控件的属性和内容数组。 |

## 返回值

[ContentControlProperties](../Enumeration/ContentControlProperties.md)[]

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
