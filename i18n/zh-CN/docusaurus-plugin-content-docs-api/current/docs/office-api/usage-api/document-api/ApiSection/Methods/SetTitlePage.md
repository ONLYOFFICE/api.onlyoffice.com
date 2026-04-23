# SetTitlePage

指定此文档中当前节的第一页是否具有不同的页眉和页脚。

## 语法

```javascript
expression.SetTitlePage(isTitlePage);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTitlePage | 必需 | boolean |  | 如果为 true，该节的第一页将具有与同一节中其他页面不同的页眉和页脚。 |

## 返回值

boolean

## 示例

此示例指定此文档中当前节的第一页是否具有不同的页眉和页脚。

```javascript editor-docx
// How to make a page a title one.

// Create a section and make its set its page as a title one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page does not have a footer, as it is a title page. ");
paragraph.AddText("Scroll down the page to see if the footer was removed.");
let section = doc.CreateSection(paragraph);
section.SetTitlePage(true);
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer. ");
paragraph.AddText("You will only see it for page #2.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is page #2 and it has a footer. ");
paragraph.AddText("Scroll down the page to see it.");
doc.Push(paragraph);
```
