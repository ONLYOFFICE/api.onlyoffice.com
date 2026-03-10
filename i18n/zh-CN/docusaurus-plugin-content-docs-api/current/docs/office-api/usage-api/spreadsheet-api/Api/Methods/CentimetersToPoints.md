# CentimetersToPoints

将厘米转换为磅。

## 语法

```javascript
expression.CentimetersToPoints(cm);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cm | 必需 | number |  | 要转换为磅的厘米数。 |

## 返回值

number

## 示例

此示例展示如何将厘米转换为磅。

```javascript editor-xlsx
const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
const text = centimeters + ' centimeters are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
