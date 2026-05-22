# SetReadOnly

设置字段为只读

## 语法

```javascript
expression.SetReadOnly(bRequired);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

锁定 PDF 中的表单字段以防止编辑。

```javascript editor-pdf
// How do I make a form field read-only in a PDF?

// Disable editing on a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
