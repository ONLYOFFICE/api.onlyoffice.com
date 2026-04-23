# Search

在段落对象的范围内搜索。搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 搜索字符串。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

此示例展示如何在段落中进行搜索。

```javascript editor-docx
// How to find a word in the paragraph.

// Make the search result word bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. This text was added to the paragraph.");
let searchResults = paragraph.Search("text");
searchResults[0].SetBold(true);
```
