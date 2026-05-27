# SetRegularExp

设置字段的正则表达式验证字符串。

## 语法

```javascript
expression.SetRegularExp(regularExpression);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| regularExpression | 必需 | string |  | 验证正则表达式（例如 "\\S+@\\S+\\.\\S+"） |

## 返回值

boolean

## 示例

在 PDF 文本字段中使用模式匹配规则验证文本条目。

```javascript editor-pdf
// How do I check that users enter valid email addresses or specific formats in a PDF?

// Apply validation rules to ensure text matches a required pattern in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRegularExp("\\S+@\\S+\\.\\S+");
textField.SetValue("example@gmail.com");
```
