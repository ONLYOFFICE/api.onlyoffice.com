# GetFontNames

返回当前段落中所有元素的所有字体名称。

## 语法

```javascript
expression.GetFontNames();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

获取文档中段落内所有元素的所有字体名称。

```javascript editor-docx
// How to get the font names of the paragraph in a document.

// Print all font names separated by a colon in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontFamily("Calibri Light");
run.AddText("This is a text run with the font family set to 'Calibri Light'.");
paragraph.AddElement(run);
let fonts = paragraph.GetFontNames();
let newParagraph = Api.CreateParagraph();
newParagraph.AddText("Fonts from previous paragraph: " + fonts.join(", "));
doc.AddElement(1, newParagraph);
```
