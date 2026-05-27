# SetRowHeight

设置以磅为单位的指定行高度。
一磅等于 1/72 英寸。

## 语法

```javascript
expression.SetRowHeight(nRow, nHeight);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | 必需 | number |  | 要设置高度的行号。 |
| nHeight | 必需 | number |  | 以磅为单位的行高度。 |

## 返回值

boolean

## 示例

修改电子表格中的行高以提高可见性。

```javascript editor-xlsx
// How do I resize a row to be taller or shorter in a spreadsheet?

// Set the vertical dimension of a row to match your content needs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRowHeight(0, 30);
```
