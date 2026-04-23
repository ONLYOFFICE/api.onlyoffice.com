# RemoveFooter

从当前节中删除指定类型的页脚。删除后，页脚将从
上一节继承，或者如果这是文档中的第一节，则不会显示指定类型的页脚。

## 语法

```javascript
expression.RemoveFooter(sType);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | 要删除的页脚类型。 |

## 返回值

boolean

## 示例

此示例从节中删除指定类型的页脚。

```javascript editor-docx
// How to remove the footer of the current section.

// Create section from the paragraph and remove its footer.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page first was with a footer. ");
paragraph.AddText("Scroll down the page to see if it was removed.");
let section = doc.CreateSection(paragraph);
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer #1. ");
paragraph.AddText("You will not see it, as it will be removed.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
doc.Push(paragraph);
let section1 = doc.GetFinalSection();
footer = section1.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer #2. ");
paragraph.AddText("Only this footer can be seen, as the first one has been removed.");
section.RemoveFooter("default");
```
