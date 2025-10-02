# 根据标签获取表单

返回文档中带有指定标签的所有表单的信息。

## 语法

```javascript
expression.GetFormsByTag(tag);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | 必填 | string | — | 表单的标签。 |

## 返回值

[内容控件](../Enumeration/ContentControl.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFormsByTag", ["{tag}"], function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].InternalId == "5_556") {
            this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
            break;
        }
    }
});
```
