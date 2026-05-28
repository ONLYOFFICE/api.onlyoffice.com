# GetName

返回主题的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiTheme](../ApiTheme.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索电子表格中活动工作簿主题的名称。

```javascript editor-xlsx
// How do I find out what the current theme is called in a spreadsheet?

// Read the theme name and write it to a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const themeName = theme.GetName();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme name: ' + themeName);
```
