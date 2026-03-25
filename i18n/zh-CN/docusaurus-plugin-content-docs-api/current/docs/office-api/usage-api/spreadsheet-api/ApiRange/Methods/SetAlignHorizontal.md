# SetAlignHorizontal

设置当前单元格范围中文本的水平对齐方式。

## 语法

```javascript
expression.SetAlignHorizontal(sAlignment);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAlignment | 必需 | 'left' \| 'right' \| 'center' \| 'justify' |  | 将应用于单元格内容的水平对齐方式。 |

## 返回值

boolean

## 示例

此示例设置单元格范围中文本的水平对齐方式。

```javascript editor-xlsx
// How to change the horizontal alignment of the cell content.

// Change the horizontal alignment of the ApiRange content to center.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");
```
