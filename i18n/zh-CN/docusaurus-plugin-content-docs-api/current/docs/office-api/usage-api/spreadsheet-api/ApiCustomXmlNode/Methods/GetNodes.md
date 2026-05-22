# GetNodes

根据给定的 XPath 从自定义 XML 节点返回节点。

## 语法

```javascript
expression.GetNodes(xPath);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 用于匹配节点的 XPath 表达式。 |

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## 示例

在电子表格中的 XML 结构内查找并收集匹配的子节点。

```javascript editor-xlsx
// How do I search for specific nodes inside an XML tree in a spreadsheet?

// Gather a set of related XML nodes by their shared path in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<library><book>Book 1</book><book>Book 2</book><book>Book 3</book></library>");
let libraryNode = xml.GetNodes('/library')[0];
let bookNodes = libraryNode.GetNodes('/book');
worksheet.GetRange("A1").SetValue("Number of books: " + bookNodes.length);
for (let i = 0; i < bookNodes.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Book" + ": " + bookNodes[i].GetText());
}
```
