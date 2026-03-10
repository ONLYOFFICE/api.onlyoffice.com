# SetItalic

设置当前单元格或单元格范围中文本字符的斜体属性。

## 语法

```javascript
expression.SetItalic(isItalic);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | 必需 | boolean |  | 指定当前单元格/单元格范围的内容以斜体显示。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置单元格中文本字符的斜体属性。

```javascript editor-xlsx
// How to make a text value of cells italic.

// Get a range and make specified cells font style italic.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Italicized text");
worksheet.GetRange("A2").SetItalic(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
