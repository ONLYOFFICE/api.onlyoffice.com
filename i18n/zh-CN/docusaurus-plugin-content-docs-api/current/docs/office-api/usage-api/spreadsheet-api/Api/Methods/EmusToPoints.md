# EmusToPoints

将 EMU（英制度量单位）转换为磅。

## 语法

```javascript
expression.EmusToPoints(emu);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | 必需 | number |  | 要转换为磅的 EMU 数。 |

## 返回值

number

## 示例

在电子表格中将 EMU 转换为磅。

```javascript editor-xlsx
// How do I change a size value from EMUs into points in a spreadsheet?

// Express a dimension in points rather than EMUs in a spreadsheet.

const emus = 100;
const points = Api.EmusToPoints(emus);
const text = emus + ' emus are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
