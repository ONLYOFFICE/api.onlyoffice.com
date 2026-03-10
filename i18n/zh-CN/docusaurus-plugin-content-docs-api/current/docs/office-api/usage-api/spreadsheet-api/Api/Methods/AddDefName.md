# AddDefName

向单元格范围添加新名称。

## 语法

```javascript
expression.AddDefName(sName, sRef, isHidden);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 范围名称。 |
| sRef | 必需 | string |  | 对指定范围的引用。必须包含工作表名称，后跟 ! 符号和单元格范围。示例：「Sheet1!$A$1:$B$2」。 |
| isHidden | 必需 | boolean |  | 定义范围名称是否隐藏。 |

## 返回值

boolean

## 示例

此示例向单元格范围添加新名称。

```javascript editor-xlsx
// How to name a range of cells.

// Name a range according its purpose.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
```
