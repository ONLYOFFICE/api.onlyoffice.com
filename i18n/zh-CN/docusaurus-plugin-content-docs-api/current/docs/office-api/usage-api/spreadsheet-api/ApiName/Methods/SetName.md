# SetName

设置表示对象名称的字符串值。

## 语法

```javascript
expression.SetName(sName);
```

`expression` - 表示 [ApiName](../ApiName.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 区域的新名称。 |

## 返回值

boolean

## 示例

此示例设置表示对象名称的字符串值。

```javascript editor-xlsx
// How to rename an object.

// Set a new name for an object and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("name", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("name");
defName.SetName("new_name");
let newDefName = Api.GetDefName("new_name");
worksheet.GetRange("A3").SetValue("The new name of the range: " + newDefName.GetName());
```
