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

获取电子表格中当前工作簿主题的名称。

```javascript editor-xlsx
// How to get the name for a theme in a spreadsheet?

// Get the name and display the result in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const themeName = theme.GetName();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme name: ' + themeName);
```
