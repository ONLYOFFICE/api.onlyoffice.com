# SetStartPageNumber

设置指定节的起始页码。

## 语法

```javascript
expression.SetStartPageNumber(nStartNumber);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStartNumber | 必需 | number |  | 起始页码。 |

## 返回值

boolean

## 示例

设置文档中节的起始页码。

```javascript editor-docx
// How do I control which number a section begins counting pages from in a document?

// Begin a section from a specific page number rather than continuing the default count in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This section starts with second page number");
paragraph.AddPageBreak();
paragraph.AddText("Third page");
paragraph.AddPageBreak();
paragraph.AddText("Fourth page");
let section = paragraph.GetSection();
section.SetStartPageNumber(2);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
```
