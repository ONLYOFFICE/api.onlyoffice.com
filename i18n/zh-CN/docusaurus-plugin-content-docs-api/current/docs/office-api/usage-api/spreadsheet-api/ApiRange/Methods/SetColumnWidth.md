# SetColumnWidth

设置当前范围内所有列的宽度。
一个列宽单位等于「常规」样式中一个字符的宽度。
对于比例字体，使用字符 0（零）的宽度。

## 语法

```javascript
expression.SetColumnWidth(nWidth);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | number |  | 列宽除以 7 像素。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置范围内所有列的宽度。

```javascript editor-xlsx
// How to make a cell column wider.

// Get a range and set its column width.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetColumnWidth(20);
```
