# GetColor

返回内容控件的标签颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取文档中内联内容控件的标签颜色。

```javascript editor-docx
// How do I get the color assigned to an inline content control in a document?

// Compare the tag colors of multiple content controls to audit their visual coding in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
inlineLvlSdt.SetColor(Api.RGB(0, 0, 255));
let color = inlineLvlSdt.GetColor();
run.AddText("Color: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

inlineLvlSdt = Api.CreateInlineLvlSdt();
run = Api.CreateRun();
color = inlineLvlSdt.GetColor();
run.AddText("Color: " + (color ? color.GetHex() : "none"));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
