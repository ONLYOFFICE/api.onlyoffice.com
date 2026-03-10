# AutoFit

更改范围内列的宽度或行的高度以实现最佳适应。

## 语法

```javascript
expression.AutoFit(bRows, bCols);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRows | 可选 | boolean |  | 指定列宽是否自动适应。 |
| bCols | 可选 | boolean |  | 指定行高是否自动适应。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例更改范围内列的宽度或行的高度以实现最佳适应。

```javascript editor-xlsx
// How to set an autofit for width or height for a range.

// Get a range and apply autofit property.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is an example of the column width autofit.");
range.AutoFit(false, true);
```
