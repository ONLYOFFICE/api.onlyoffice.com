# GetFormsByTag

返回已添加到文档中具有指定标签的所有表单的信息。

## 语法

```javascript
expression.GetFormsByTag(tag);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | 必需 | string |  | 表单标签。 |

## 返回值

[ContentControl](../Enumeration/ContentControl.md)[]

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
