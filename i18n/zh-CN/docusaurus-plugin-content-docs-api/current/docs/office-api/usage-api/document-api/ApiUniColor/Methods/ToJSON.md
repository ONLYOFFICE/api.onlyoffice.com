# ToJSON

将 ApiUniColor 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiUniColor](../ApiUniColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将颜色对象序列化为 JSON 并恢复以在文档中使用。

```javascript editor-docx
// How do I convert a named color into a portable JSON format for reuse in a document?

// Preserve a preset color definition by round-tripping it through JSON in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let presetColor = Api.CreatePresetColor("peachPuff");
let json = presetColor.ToJSON();
let presetColorFromJSON = Api.FromJSON(json);
let gs1 = Api.CreateGradientStop(presetColorFromJSON, 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
```
