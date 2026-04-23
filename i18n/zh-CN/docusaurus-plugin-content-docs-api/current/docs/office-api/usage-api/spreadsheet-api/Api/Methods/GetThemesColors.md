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

此示例演示如何获取电子表格所有可用主题颜色的列表。

```javascript editor-xlsx
// Get all theme colors from the worksheet.

// List all available theme colors.

let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
```
