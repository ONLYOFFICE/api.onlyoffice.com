# 移除内容控件

移除当前选中的内容控件，同时保留其所有内容。鼠标光标当前所在的内容控件将被移除。

## 语法

```javascript
expression.RemoveContentControl(InternalId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InternalId | 必填 | string | — | 内容控件的唯一内部标识符。 |

## 返回值

[内容控件父级属性](../Enumeration/ContentControlParentPr.md)

## 示例

```javascript
window.buttonIDChangeState_click = undefined;
if (null == returnValue) {
    window.Asc.plugin.executeMethod ("AddContentControl", [1, {"Id" : 7, "Lock" : 0, "Tag" : "{some text}"}]);
}
else {
    window.Asc.plugin.executeMethod ("RemoveContentControl", [returnValue]);
}
```
