# GetClassType

返回 ApiTheme 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTheme](../ApiTheme.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"theme"

## 示例

获取电子表格中主题的类类型。

```javascript editor-xlsx
// How to identify the class type of a theme in a spreadsheet?

// Obtain the class type identifier of a theme object in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);
```
