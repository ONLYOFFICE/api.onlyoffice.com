# ToJSON

将 ApiSchemeColor 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiSchemeColor](../ApiSchemeColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

此示例将 ApiSchemeColor 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the color object.

// Convert the RGB color object to json and add it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let schemeColor = Api.CreateSchemeColor("dk1");
let json = schemeColor.ToJSON();
let schemeColorFromJSON = Api.FromJSON(json);
let fill = Api.CreateSolidFill(schemeColorFromJSON);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(drawing);
```
