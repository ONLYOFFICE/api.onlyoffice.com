# SetReferenceStyle

设置单元格引用样式。

## 语法

```javascript
expression.SetReferenceStyle(sReferenceStyle);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReferenceStyle | 必需 | [ReferenceStyle](../../Enumeration/ReferenceStyle.md) |  | 单元格引用样式。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置引用样式。

```javascript editor-xlsx
// How to set a style of a reference.

// Set reference style using ID.

let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
