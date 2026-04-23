# SetFontColor

使用先前创建的颜色对象设置当前单元格范围的文本颜色。

## 语法

```javascript
expression.SetFontColor(oColor);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 指定要设置给单元格/单元格范围中文本的颜色的颜色对象。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置单元格范围的文本颜色。

```javascript editor-xlsx
// How to color a cell text.

// Get a range and apply an RGB color to its text color.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetFontColor(Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is the text with a color set to it");
worksheet.GetRange("A4").SetValue("This is the text with a default color");
```
