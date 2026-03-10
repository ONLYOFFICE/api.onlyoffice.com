# SetSubject

设置文档主题。

## 语法

```javascript
expression.SetSubject(sSubject);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSubject | 必需 | string |  | 文档主题。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置和获取当前演示文稿的主题。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetSubject("ApiCore Method Showcase");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const subject = core.GetSubject();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Subject: " + subject);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
