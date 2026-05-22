# Search

搜索文档对象的范围。搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 搜索字符串。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

搜索单词的所有出现位置并在文档中将其中一个结果设为粗体。

```javascript editor-docx
// How do I find every match of a string and format a specific result in a document?

// Collect search results by keyword and style the second match to highlight it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
doc.Push(paragraph);
let searchResults = doc.Search("paragraph");
searchResults[1].SetBold(true);
```
