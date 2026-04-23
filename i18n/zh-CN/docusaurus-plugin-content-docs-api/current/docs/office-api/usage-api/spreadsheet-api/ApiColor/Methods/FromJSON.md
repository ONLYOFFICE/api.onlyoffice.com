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

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const original = Api.RGB(93, 192, 232);
const json = JSON.parse(original.ToJSON());
const restored = original.FromJSON(json);

const fill = Api.CreateSolidFill(restored);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Original: " + original.GetHex() + " | Restored: " + restored.GetHex());

```
