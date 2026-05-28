# ToJSON

将 ApiPresetColor 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiPresetColor](../ApiPresetColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将命名颜色保存为文档中的可移植数据结构。

```javascript editor-docx
// How do I export a named color so it can be restored later in a document?

// Preserve a named color value by serializing it for later reuse in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let presetColor = Api.CreatePresetColor("peachPuff");
let json = presetColor.ToJSON();
let presetColorFromJSON = Api.FromJSON(json);
let gs1 = Api.CreateGradientStop(presetColor, 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
doc.Push(paragraph);
```
