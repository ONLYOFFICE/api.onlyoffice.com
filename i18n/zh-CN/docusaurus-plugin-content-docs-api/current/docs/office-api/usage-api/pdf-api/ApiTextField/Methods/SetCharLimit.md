# SetCharLimit

设置文本字段的字符限制。
&lt;note&gt; 字符限制为 0 表示字段没有字符限制

## 语法

```javascript
expression.SetCharLimit(nChars);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nChars | 必需 | number |  | 字符限制数 |

## 返回值

boolean

## 示例

This example adds text field and sets char limit for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());

```
