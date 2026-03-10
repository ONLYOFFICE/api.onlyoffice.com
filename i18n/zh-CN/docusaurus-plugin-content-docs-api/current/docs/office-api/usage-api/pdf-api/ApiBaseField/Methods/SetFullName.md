# SetFullName

如果可能，设置新的字段名称。

## 语法

```javascript
expression.SetFullName(sName);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example sets field full name and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('EXAMPLE');
textField.SetValue('Field full name is: ' + textField.GetFullName());
```
