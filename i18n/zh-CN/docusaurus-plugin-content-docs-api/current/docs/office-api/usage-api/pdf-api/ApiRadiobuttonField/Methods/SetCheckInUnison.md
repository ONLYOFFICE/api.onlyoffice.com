# SetCheckInUnison

设置字段的统一选中属性。

## 语法

```javascript
expression.SetCheckInUnison(checkInUnison);
```

`expression` - 表示 [ApiRadiobuttonField](../ApiRadiobuttonField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkInUnison | 必需 | boolean |  | 指定具有相同导出值的字段是否一起选中。 |

## 返回值

boolean

## 示例

链接单选按钮选项使 PDF 中一次只能选择一个。

```javascript editor-pdf
// How do I make radio buttons work together in a PDF?

// Enable synchronized selection across radio button choices in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

radiobuttonField.AddOption(0, [10, 30, 25, 45], 'Choice1');
radiobuttonField.AddOption(0, [10, 50, 25, 65], 'Choice2');
radiobuttonField.AddOption(0, [10, 70, 25, 85], 'Choice3');
radiobuttonField.SetCheckInUnison(true);
radiobuttonField.SetValue('Choice1');
```
