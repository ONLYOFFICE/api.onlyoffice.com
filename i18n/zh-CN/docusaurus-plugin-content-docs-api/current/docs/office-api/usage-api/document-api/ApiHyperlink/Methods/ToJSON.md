# ToJSON

将 ApiHyperlink 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

将超链接转换为 JSON 对象并将其插入到文档的段落中。

```javascript editor-docx
// How do I serialize a hyperlink to JSON and restore it in a document?

// Duplicate a hyperlink by exporting it to JSON and re-importing it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
let json = hyperlink.ToJSON(true);
let hyperlinkFromJSON = Api.FromJSON(json);
hyperlinkFromJSON.SetDefaultStyle();
paragraph.AddElement(hyperlinkFromJSON);
```
