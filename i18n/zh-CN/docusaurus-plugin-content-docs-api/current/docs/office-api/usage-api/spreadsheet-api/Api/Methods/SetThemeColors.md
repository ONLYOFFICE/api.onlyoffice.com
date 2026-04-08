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

此示例设置当前电子表格的主题颜色。

```javascript editor-xlsx
// How to get all theme colors and apply one of them.

// Apply one of the theme colors from the array of available ones.

let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
Api.SetThemeColors(themes[3]);
worksheet.GetRange("C3").SetValue("The 'Apex' theme colors were set to the current spreadsheet.");
```
