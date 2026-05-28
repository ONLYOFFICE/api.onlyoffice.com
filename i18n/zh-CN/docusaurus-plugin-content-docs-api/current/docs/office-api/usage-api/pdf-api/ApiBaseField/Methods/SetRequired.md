# SetRequired

设置字段为必填

## 语法

```javascript
expression.SetRequired(required);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| required | 必需 | boolean |  | 指定字段是否为必填。 |

## 返回值

boolean

## 示例

在 PDF 中将表单字段标记为必填。

```javascript editor-pdf
// How do I make a form field required in a PDF?

// Check whether a field is marked as required in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());
```
