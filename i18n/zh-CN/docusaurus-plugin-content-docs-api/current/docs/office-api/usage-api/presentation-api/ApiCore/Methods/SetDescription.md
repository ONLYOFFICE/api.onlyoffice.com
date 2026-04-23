# SetDescription

设置文档描述。

## 语法

```javascript
expression.SetDescription(sDescription);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDescription | 必需 | string |  | 文档描述。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何使用 ApiCore 设置和获取当前演示文稿的描述。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetDescription("This is a sample presentation made to help fellow users understand how to use the ApiCore methods.");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const description = core.GetDescription();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Description: " + description);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
