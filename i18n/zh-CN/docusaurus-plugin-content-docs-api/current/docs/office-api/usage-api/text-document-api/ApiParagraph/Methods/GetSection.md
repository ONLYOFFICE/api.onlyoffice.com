# GetSection

返回段落所在的节。

## 语法

```javascript
expression.GetSection();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSection](../../ApiSection/ApiSection.md)

## 示例

此示例展示如何获取段落所在的节。

```javascript editor-docx
// How to get the section where the paragraph is located.

// Get the paragraph section and set its page size.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
let section = paragraph.GetSection();
section.SetPageSize(7200, 4320);
```
