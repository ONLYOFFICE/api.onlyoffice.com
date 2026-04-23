# GetAddress

返回范围地址。

## 语法

```javascript
expression.GetAddress(RowAbs, ColAbs, RefStyle, External, RelativeTo);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| RowAbs | 必需 | boolean |  | 定义行的链接是否为绝对引用。 |
| ColAbs | 必需 | boolean |  | 定义列的链接是否为绝对引用。 |
| RefStyle | 必需 | string |  | 引用样式。 |
| External | 必需 | boolean |  | 定义范围是否在当前文件中。 |
| RelativeTo | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 当前范围相对于的范围。 |

## 返回值

string \| null

## 示例

此示例演示如何获取范围地址。

```javascript editor-xlsx
// How to get an address of a range.

// Get an address of one range and set it for another one.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let address = worksheet.GetRange("A1").GetAddress(true, true, "xlA1", false);
worksheet.GetRange("A3").SetValue("Address: ");
worksheet.GetRange("B3").SetValue(address);

```
