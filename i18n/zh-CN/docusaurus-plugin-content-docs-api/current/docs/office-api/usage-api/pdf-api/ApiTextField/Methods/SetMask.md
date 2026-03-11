# SetMask

设置字段输入文本的掩码。

## 语法

```javascript
expression.SetMask(sMask);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sMask | 必需 | string |  | 字段掩码（例如 "(999)999-9999"） |

## 返回值

boolean

## 示例

此示例获取文本字段并为其设置输入文本的掩码。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMask("(999)999-9999");
textField.SetValue("(123)456-7890");

```
