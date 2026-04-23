# SetCheckBoxChecked

设置内容控件的复选框值。
此方法将内容控件的复选框状态更新为选中或未选中。

## 语法

```javascript
expression.SetCheckBoxChecked(isChecked);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isChecked | 必需 | boolean |  | 要为复选框设置的状态。`true` 表示选中，`false` 表示未选中。 |

## 返回值

boolean

## 示例

此示例展示如何设置内联内容控件的复选框值。

```javascript editor-docx
let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
inlineControl.SetCheckBoxChecked(true);
```
