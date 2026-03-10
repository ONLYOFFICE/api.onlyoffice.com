# SetContentStatus

设置文档内容状态。

## 语法

```javascript
expression.SetContentStatus(sStatus);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStatus | 必需 | string |  | 文档内容状态。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何使用 ApiCore 设置和获取当前演示文稿的内容状态。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetContentStatus("Final");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const contentStatus = core.GetContentStatus();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
