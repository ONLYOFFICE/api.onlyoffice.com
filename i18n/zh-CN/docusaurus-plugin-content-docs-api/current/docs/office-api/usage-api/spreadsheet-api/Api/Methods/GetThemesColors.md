# GetThemesColors

返回电子表格所有可用主题颜色的列表。

## 语法

```javascript
expression.GetThemesColors();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

检索电子表格中所有可用的主题颜色。

```javascript editor-xlsx
// How do I get a list of every theme color used in a spreadsheet?

// Display the full set of theme color names in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
```
