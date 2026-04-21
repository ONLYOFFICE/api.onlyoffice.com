# SetIdentifier

设置文档标识符。

## 语法

```javascript
expression.SetIdentifier(sIdentifier);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sIdentifier | 必需 | string |  | 文档标识符。 |

## 返回值

此方法不返回任何数据。

## 示例

在演示文稿中使用核心属性设置和获取当前演示文稿的标识符。

```javascript editor-pptx
// How to set identifier for a core properties in a presentation?

// Set identifier and display the result in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetIdentifier("#ID42");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const identifier = core.GetIdentifier();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Identifier: " + identifier);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
