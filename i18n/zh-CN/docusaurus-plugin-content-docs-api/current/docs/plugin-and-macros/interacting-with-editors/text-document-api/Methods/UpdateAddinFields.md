# UpdateAddinFields

使用指定的数据更新加载项字段。

## 语法

```javascript
expression.UpdateAddinFields(arrData);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrData | 必需 | [AddinFieldData](../Enumeration/AddinFieldData.md)[] |  | 加载项字段数据数组。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
let addinFieldData = [{"FieldId": "1", "Value": "Addin №1", "Content": "This is the first addin field"}];
window.Asc.plugin.executeMethod("UpdateAddinFields", [addinFieldData]);
```
