# RemoveHeader

从当前节中删除指定类型的页眉。删除后，页眉将从
上一节继承，或者如果这是文档中的第一节，则不会显示指定类型的页眉。

## 语法

```javascript
expression.RemoveHeader(sType);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | 要删除的页眉类型。 |

## 返回值

boolean

## 示例

此示例从节中删除指定类型的页眉。

```javascript editor-docx
// How to remove the header of the current section.

// Create section from the paragraph and remove its header.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page first was with a header. ");
paragraph.AddText("The header has been removed, you cannot see it. ");
paragraph.AddText("Scroll down to the next page to see the header there.");
let section = doc.CreateSection(paragraph);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is page header #1. ");
paragraph.AddText("You will not see it, as it will be removed.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a page with a header. ");
doc.Push(paragraph);
let section1 = doc.GetFinalSection();
header = section1.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is page header #2. ");
paragraph.AddText("Only this header can be seen, as the first one has been removed.");
section.RemoveHeader("default");
```
