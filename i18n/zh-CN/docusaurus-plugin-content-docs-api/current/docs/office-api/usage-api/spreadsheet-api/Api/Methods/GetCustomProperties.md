# GetCustomProperties

返回工作簿的自定义属性。

## 语法

```javascript
expression.GetCustomProperties();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomProperties](../../ApiCustomProperties/ApiCustomProperties.md)

## 示例

此示例演示如何使用 ApiCustomProperties 在电子表格中配置自定义属性。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const customProps = Api.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
customProps.Add("MyNumberProperty", 123.450);
customProps.Add("MyDateProperty", new Date("23 November 2023"));
customProps.Add("MyBoolProperty", true);

let stringValue = customProps.Get("MyStringProperty");
let numberValue = customProps.Get("MyNumberProperty");
let dateValue = customProps.Get("MyDateProperty");
let boolValue = customProps.Get("MyBoolProperty");

let fill = Api.CreateSolidFill(Api.RGB(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Custom String Property: " + stringValue + "\n");
paragraph.AddText("Custom Number Property: " + numberValue + "\n");
paragraph.AddText("Custom Date Property: " + dateValue.toDateString() + "\n");
paragraph.AddText("Custom Boolean Property: " + boolValue);

```
