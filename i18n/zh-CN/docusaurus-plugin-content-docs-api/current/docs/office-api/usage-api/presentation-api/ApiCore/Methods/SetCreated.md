# SetCreated

设置文档创建日期。

## 语法

```javascript
expression.SetCreated(oCreated);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCreated | 必需 | Date |  | 文档创建日期。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何使用 ApiCore 设置和获取演示文稿的创建日期。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCreated(new Date('20 January 2000'));

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const createdDate = core.GetCreated().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Created: " + createdDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
