# SetFreezePanesType

设置冻结窗格的类型。

## 语法

```javascript
expression.SetFreezePanesType(FreezePaneType);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FreezePaneType | 必需 | [FreezePaneType](../../Enumeration/FreezePaneType.md) |  | 冻结窗格类型（「null」表示取消冻结）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例冻结第一列并将冻结的范围地址粘贴到表格中。

```javascript editor-xlsx
// How to freeze a column and get its address.

// Insert address of freezed columns into a range.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
