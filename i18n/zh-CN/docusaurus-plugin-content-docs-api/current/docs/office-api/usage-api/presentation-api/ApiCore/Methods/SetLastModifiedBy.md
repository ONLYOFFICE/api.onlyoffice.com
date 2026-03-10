# SetLastModifiedBy

设置最后修改文档的用户名称。

## 语法

```javascript
expression.SetLastModifiedBy(sLastModifiedBy);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLastModifiedBy | 必需 | string |  | 最后修改文档的用户名称。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置和获取最后修改当前演示文稿的用户名称。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastModifiedBy = core.GetLastModifiedBy();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
