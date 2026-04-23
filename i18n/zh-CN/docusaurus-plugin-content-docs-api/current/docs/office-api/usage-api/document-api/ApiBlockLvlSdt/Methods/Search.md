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

此示例演示如何在内容控件对象中进行搜索。

```javascript editor-docx
// Creates a block content control, adds two paragraphs to it, and searches for the specified word among the text in this container.

// How to search for the specified string in the ApiBlockLvlSdt object.

// Searches for the specified word in the block level content control and returns it as the ApiRange object.

// Searches for the specified word in the ApiBlockLvlSdt object and sets the bold property to the second occurrence of this word in the container.

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
