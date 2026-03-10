# SetAlignVertical

设置当前单元格范围中文本的垂直对齐方式。

## 语法

```javascript
expression.SetAlignVertical(sAligment);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAligment | 必需 | 'center' \| 'bottom' \| 'top' \| 'distributed' \| 'justify' |  | 将应用于单元格内容的垂直对齐方式。 |

## 返回值

boolean

## 示例

此示例设置单元格范围中文本的垂直对齐方式。

```javascript editor-xlsx
// How to change the vertical alignment of the cell content.

// Change the vertical alignment of the ApiRange content to distributed.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D5");
worksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
range.SetAlignVertical("distributed");
```
