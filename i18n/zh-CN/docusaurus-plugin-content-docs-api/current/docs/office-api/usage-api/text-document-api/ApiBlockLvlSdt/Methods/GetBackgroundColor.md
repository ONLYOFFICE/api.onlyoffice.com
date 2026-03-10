# GetBackgroundColor

返回当前内容控件的背景颜色。

## 语法

```javascript
expression.GetBackgroundColor();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

null \| Object

## 示例

此示例演示如何获取块级容器的背景颜色。

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(Api.RGBA(200, 200, 255, 255));
let color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);

```
