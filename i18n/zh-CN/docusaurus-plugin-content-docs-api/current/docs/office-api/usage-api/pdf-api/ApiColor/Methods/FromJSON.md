# FromJSON

将 JSON 对象转换为 ApiColor 对象。

## 语法

```javascript
expression.FromJSON(jsonObject);
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| jsonObject | 必需 | string |  | 颜色的 JSON 表示。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

此示例展示如何从 JSON 恢复形状填充颜色。

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const original = Api.RGB(93, 192, 232);
const json = JSON.parse(original.ToJSON());
const restored = original.FromJSON(json);

const fill = Api.CreateSolidFill(restored);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Original: ' + original.GetHex() + '\nRestored: ' + restored.GetHex());
paragraph.AddElement(run);
page.AddObject(shape);

```
