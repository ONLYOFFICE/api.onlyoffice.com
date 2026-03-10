# GetHyperlink

返回当前绘图对象（形状或图像）的超链接。

## 语法

```javascript
expression.GetHyperlink();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null

## 示例

This example returns the hyperlink from the current drawing object.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(200, 230, 201));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const hyperlink = Api.CreateHyperlink('https://api.onlyoffice.com/', 'ONLYOFFICE for developers');
shape.SetHyperlink(hyperlink);

const retrievedHyperlink = shape.GetHyperlink();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
if (retrievedHyperlink) {
  paragraph.AddText('Hyperlink: ' + retrievedHyperlink.GetScreenTipText());
  paragraph.AddText(' (' + retrievedHyperlink.GetLinkedText() + ')');
} else {
  paragraph.AddText('No hyperlink found.');
}
slide.AddObject(shape);

```
