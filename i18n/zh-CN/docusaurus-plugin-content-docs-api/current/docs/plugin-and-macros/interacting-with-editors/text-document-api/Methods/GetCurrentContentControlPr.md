# 获取当前内容控件属性

返回当前内容控件的属性。

## 语法

```javascript
expression.GetCurrentContentControlPr(contentFormat);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| contentFormat | 必填 | string | — | 内容格式（"none"、"text"、"html"、"ole" 或 "desktop"）。 |

## 返回值

[内容控件属性](../Enumeration/ContentControlProperties.md)

## 示例

```javascript
window.Asc.plugin.event_onClick = function (isSelectionUse) {
    window.Asc.plugin.executeMethod ("GetCurrentContentControlPr", [], function (obj) {
        window.Asc.plugin.currentContentControl = obj;
        var controlTag = obj ? obj.Tag : "";
        if (isSelectionUse)
            controlTag = "";
        ... 
    }); 
};
```
