# AddDefName

向当前工作表添加新名称。

## 语法

```javascript
expression.AddDefName(sName, sRef, isHidden);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 范围名称。 |
| sRef | 必需 | string |  | 必须包含工作表名称，后跟 ! 符号和单元格区域。示例："Sheet1!$A$1:$B$2"。 |
| isHidden | 必需 | boolean |  | 定义范围名称是否隐藏。 |

## 返回值

boolean

## 示例

此示例向工作表添加新名称。

```javascript editor-xlsx
// How to change a name of the worksheet range.

// Name a range from a worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
```
