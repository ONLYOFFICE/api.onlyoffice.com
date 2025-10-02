# 添加加载项字段

添加加载项字段数据。

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ---- |
| Content | string | 字段文本内容。 |
| FieldId | string | 字段标识符。 |
| Value | string | 字段值。 |
## 类型

object（对象）



## 示例

```javascript
let addinFieldData = {"FieldId": "1", "Value": "Addin №1", "Content": "This is the first addin field"};
window.Asc.plugin.executeMethod("AddAddinField", [addinFieldData]);
```
