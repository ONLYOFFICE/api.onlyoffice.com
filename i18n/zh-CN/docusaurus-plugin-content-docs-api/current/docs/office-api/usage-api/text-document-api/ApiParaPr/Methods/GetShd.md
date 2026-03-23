# GetShd

返回应用于段落内容的底纹。

## 语法

```javascript
expression.GetShd();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

此示例展示如何获取应用于段落内容的底纹。

```javascript editor-docx
// How to get the shading type of the paragraph.

// Get the paragraph shading and fill the drawing with it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is an example of setting a shade to a paragraph. ');

let paraPr = paragraph.GetParaPr();
paraPr.SetShd('clear', Api.HexColor('#ff6f3d'));

let shade = paraPr.GetShd();
let fill = Api.CreateSolidFill(shade);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape('rect', 10 * 36000, 3 * 36000, fill, stroke);

paragraph = Api.CreateParagraph();
paragraph.AddText('Shade: ');
paragraph.AddDrawing(drawing);
doc.Push(paragraph);

```
