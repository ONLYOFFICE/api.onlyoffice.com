# SetModified

设置文档最后修改的日期。

## 语法

```javascript
expression.SetModified(oModified);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oModified | 必需 | Date |  | 文档最后修改的日期。 |

## 返回值

此方法不返回任何数据。

## 示例

标记演示文稿的最后修改日期。

```javascript editor-pptx
// How do I set when a presentation was last edited?

// Update and display the modification timestamp for a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetModified(new Date("10 March 1990"));

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastModifiedDate = core.GetModified().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
