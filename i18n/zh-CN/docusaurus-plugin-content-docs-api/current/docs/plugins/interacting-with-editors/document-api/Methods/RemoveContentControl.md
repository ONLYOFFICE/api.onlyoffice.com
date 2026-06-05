# RemoveContentControl

删除当前选定的内容控件，同时保留其所有内容。将删除鼠标光标当前所在位置的内容控件。

## 语法

```javascript
expression.RemoveContentControl(InternalId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InternalId | 必需 | string |  | 内容控件的唯一内部标识符。 |

## 返回值

[ContentControlParentPr](../Enumeration/ContentControlParentPr.md)

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
