# SetBold

设置当前单元格或单元格范围中文本字符的粗体属性。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定当前单元格/单元格范围的内容以粗体显示。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置当前单元格或单元格范围中文本字符的粗体属性。

```javascript editor-xlsx
// How to change the font style properties of a range making it bold.

// Make characters of the ApiRange object bold.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Bold text");
worksheet.GetRange("A2").SetBold(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
