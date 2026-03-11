# MoveOption

将选项移动到列表选项中的指定位置。

## 语法

```javascript
expression.MoveOption(nCurPos, nNewPos);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCurPos | 必需 | number |  | 被移动选项的索引 |
| nNewPos | 必需 | number |  | 选项的新位置 |

## 返回值

boolean

## 示例

此示例在带有选项列表的字段中移动选项。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOption(2, 0);
```
