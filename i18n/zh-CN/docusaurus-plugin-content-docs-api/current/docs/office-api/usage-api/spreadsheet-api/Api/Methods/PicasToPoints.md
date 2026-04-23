# PicasToPoints

将派卡转换为磅。

## 语法

```javascript
expression.PicasToPoints(pc);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pc | 必需 | number |  | 要转换为磅的派卡数。 |

## 返回值

number

## 示例

此示例展示如何将派卡转换为磅。

```javascript editor-xlsx
const picas = 100;
const points = Api.PicasToPoints(picas);
const text = picas + ' picas are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
