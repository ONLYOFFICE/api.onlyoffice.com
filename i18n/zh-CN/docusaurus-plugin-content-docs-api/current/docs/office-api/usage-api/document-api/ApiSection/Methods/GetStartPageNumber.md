# GetStartPageNumber

返回指定节的起始页码。

## 语法

```javascript
expression.GetStartPageNumber();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例获取节的起始页码索引。

```javascript editor-docx
// How to get the start page number for the current section.

// Get a section from the paragraph and its first page number.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = paragraph.GetSection();
section.SetStartPageNumber(5);
let startPageNumber = section.GetStartPageNumber();
paragraph.AddText("The start page number for this section is: " + startPageNumber);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
```
