# SetReadingOrder

设置当前单元格范围中文本的方向（阅读顺序）。

## 语法

```javascript
expression.SetReadingOrder(direction);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| direction | 必需 | 'context' \| 'ltr' \| 'rtl' |  | 将应用于单元格内容的方向（阅读顺序）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置单元格范围中文本的阅读顺序。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Hello, أهلاً, 你好");
const range = worksheet.GetRange("A1:C3");
range.SetReadingOrder('rtl');

```
