# SetEvenAndOddHdrFtr

指定此文档中的节是否为奇数页和偶数页设置不同的页眉和页脚（奇数页使用一套页眉/页脚，偶数页使用另一套页眉/页脚）。

## 语法

```javascript
expression.SetEvenAndOddHdrFtr(isEvenAndOdd);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isEvenAndOdd | 必需 | boolean |  | 如果为 true，则奇数页和偶数页的页眉/页脚将不同；如果为 false，则相同。 |

## 返回值

boolean

## 示例

此示例指定此文档中的节是否为奇数页和偶数页设置不同的页眉和页脚。

```javascript editor-docx
// How to make headers and footers different for even and odd pages.

// Set a boolean value that indicates whether to keep the headers and footers same for odd/even pages or not.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.CreateSection(paragraph);
paragraph.AddText("This is section #1 of the document. ");
paragraph.AddText("It has a header and a footer for odd pages. ");
paragraph.AddText("Scroll down to see the other pages.");
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is an odd page header");
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is an odd page footer");
doc.SetEvenAndOddHdrFtr(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #2 of the document. ");
paragraph.AddText("It has a header and a footer for even pages. ");
paragraph.AddText("Scroll down to see the other pages.");
doc.Push(paragraph);
section = doc.CreateSection(paragraph);
section.SetType("evenPage");
header = section.GetHeader("even", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is an even page header");
footer = section.GetFooter("even", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is an even page footer");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #3 of the document. ");
paragraph.AddText("It has a header and a footer for odd pages. ");
paragraph.AddText("Scroll down to see the other pages.");
doc.Push(paragraph);
section = doc.CreateSection(paragraph);
section.SetType("oddPage");
section = doc.GetFinalSection();
section.SetType("evenPage");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #4 of the document. ");
paragraph.AddText("It has a header and a footer for even pages.");
doc.Push(paragraph);

```
