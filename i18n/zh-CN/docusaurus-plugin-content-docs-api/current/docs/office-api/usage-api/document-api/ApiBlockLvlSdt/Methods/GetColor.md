# GetColor

返回内容控件的标签颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取文档中内容控件的突出显示颜色。

```javascript editor-docx
// How do I get the color assigned to a content control in a document?

// Check what color a content control has and display its hex value in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetColor(Api.RGB(0, 0, 255));
let color = blockLvlSdt.GetColor();
blockLvlSdt.GetContent().GetElement(0).AddText("Color: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetColor();
blockLvlSdt.GetContent().GetElement(0).AddText("Color: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);
```
