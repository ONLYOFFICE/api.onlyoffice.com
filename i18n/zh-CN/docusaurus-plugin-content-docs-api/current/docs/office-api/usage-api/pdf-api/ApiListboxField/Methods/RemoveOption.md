# RemoveOption

从列表选项中移除选项。

## 语法

```javascript
expression.RemoveOption(nPos);
```

`expression` - 表示 [ApiListboxField](../ApiListboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 移除选项的位置 |

## 返回值

boolean

## 示例

此示例从带有选项列表的字段中删除选项。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
comboboxField.RemoveOption(2);
```
