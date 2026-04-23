# MillimetersToPixels

将毫米转换为像素。

## 语法

```javascript
expression.MillimetersToPixels(mm);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | 必需 | number |  | 要转换为像素的毫米数。 |

## 返回值

number

## 示例

此示例展示如何将毫米转换为像素。

```javascript editor-xlsx
const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
const text = millimeters + ' millimeters are equal to ' + pixels + ' pixels.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
