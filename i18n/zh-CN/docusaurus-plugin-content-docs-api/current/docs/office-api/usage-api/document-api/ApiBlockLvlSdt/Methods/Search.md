# Search

搜索内容控件对象的范围。搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(text, isMatchCase);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 搜索字符串。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

在文档中的内容控件内搜索单词。

```javascript editor-docx
// How do I find and highlight a word inside a content control in a document?

// Locate specific text within a content control and apply formatting to it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph1, 0);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph2, 1);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Search("paragraph")[1].SetBold(true);
```
