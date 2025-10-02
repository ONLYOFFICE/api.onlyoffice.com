# 添加加载项字段

根据请求中指定的数据创建一个新的加载项字段。

## 语法

```javascript
expression.AddAddinField(data);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必填 | [添加加载项字段](../Enumeration/AddinFieldData.md) | — | 加载项字段数据。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
let addinFieldData = {"FieldId": "1", "Value": "Addin №1", "Content": "This is the first addin field"};
window.Asc.plugin.executeMethod("AddAddinField", [addinFieldData]);
```
