# SetVersion

设置文档版本。

## 语法

```javascript
expression.SetVersion(sVersion);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sVersion | 必需 | string |  | 文档版本。 |

## 返回值

此方法不返回任何数据。

## 示例

为演示文稿存储版本号。

```javascript editor-pptx
// How do I track the version of my presentation?

// Write and retrieve the version identifier for a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetVersion("v9.0");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const version = core.GetVersion();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Version: " + version);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
