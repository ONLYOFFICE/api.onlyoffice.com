# GetCustomProperties

返回当前演示文稿的自定义属性。

## 语法

```javascript
expression.GetCustomProperties();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomProperties](../../ApiCustomProperties/ApiCustomProperties.md)

## 示例

此示例演示如何使用 ApiCustomProperties 在演示文稿中配置自定义属性。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const customProps = presentation.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, World!");
customProps.Add("MyNumberProperty", 42);
customProps.Add("MyDateProperty", new Date("2023-11-23"));
customProps.Add("MyBoolProperty", true);

let stringValue = customProps.Get("MyStringProperty");
let numberValue = customProps.Get("MyNumberProperty");
let dateValue = customProps.Get("MyDateProperty");
let boolValue = customProps.Get("MyBoolProperty");

let fill = Api.CreateSolidFill(Api.RGB(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 100 * 36000, fill, stroke);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);

paragraph.AddText("Custom String Property: " + stringValue + "\n");
paragraph.AddText("Custom Number Property: " + numberValue + "\n");
paragraph.AddText("Custom Date Property: " + dateValue.toDateString() + "\n");
paragraph.AddText("Custom Boolean Property: " + boolValue);

slide.AddObject(shape);

```
