# SetThemeColors

设置当前电子表格的主题颜色。

## 语法

```javascript
expression.SetThemeColors(sTheme);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTheme | 必需 | string |  | 将设置到当前电子表格的配色方案。 |

## 返回值

boolean

## 示例

应用命名的颜色主题以更改电子表格的整体视觉风格。

```javascript editor-xlsx
// How do I pick and activate one of the available color themes for the whole document in a spreadsheet?

// Update the document's palette by selecting a theme from the list of built-in options in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
Api.SetThemeColors(themes[3]);
worksheet.GetRange("C3").SetValue("The 'Apex' theme colors were set to the current spreadsheet.");
```
