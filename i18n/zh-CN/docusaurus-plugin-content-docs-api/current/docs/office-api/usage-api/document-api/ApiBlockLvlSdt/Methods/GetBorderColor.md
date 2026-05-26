# GetBorderColor

返回当前内容控件的边框颜色。

## 语法

```javascript
expression.GetBorderColor();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

读取文档中内容控件的边框颜色。

```javascript editor-docx
// How do I get the border color set on a content control in a document?

// Check what border color a content control has and display its hex value in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBorderColor(Api.RGB(0, 0, 255));
let color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);
```
