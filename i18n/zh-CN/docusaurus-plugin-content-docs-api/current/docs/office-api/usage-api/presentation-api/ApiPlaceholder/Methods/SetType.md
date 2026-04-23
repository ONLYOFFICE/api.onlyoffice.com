# SetType

设置占位符类型。

## 语法

```javascript
expression.SetType(sType);
```

`expression` - 表示 [ApiPlaceholder](../ApiPlaceholder.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | 占位符类型 |

## 返回值

boolean

## 示例

此示例设置占位符类型。

```javascript editor-pptx
// How to set a placeholder type (chart, table, etc.).

// Create a shape and set its placeholder type to "chart".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);

placeholder.SetType("picture");
slide.AddObject(shape);

```
