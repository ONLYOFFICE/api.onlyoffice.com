# GetStyle

返回段落样式方法。

## 语法

```javascript
expression.GetStyle();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

此示例展示如何获取段落样式。

```javascript editor-docx
// How to get the style of the paragraph.

// Get the paragraph style and display its name.

let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paraPr.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paraPr.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());
```
