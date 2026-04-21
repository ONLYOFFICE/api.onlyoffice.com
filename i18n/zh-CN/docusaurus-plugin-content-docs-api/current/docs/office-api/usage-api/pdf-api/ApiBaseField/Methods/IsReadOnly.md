# IsReadOnly

检查字段是否为只读

## 语法

```javascript
expression.IsReadOnly();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

获取并显示 PDF 文档中字段的只读属性。

```javascript editor-pdf
// How can I is read only using a base field in a PDF document?

// Is read only for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
