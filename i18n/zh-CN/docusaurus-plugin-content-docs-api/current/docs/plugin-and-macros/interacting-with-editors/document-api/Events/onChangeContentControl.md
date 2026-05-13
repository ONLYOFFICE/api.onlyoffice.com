# onChangeContentControl

用于显示哪个内容控件已更改的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| control | [Event_ContentControl](../Enumeration/Event_ContentControl.md) | 定义已更改的内容控件。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onChangeContentControl", (control) => {
    console.log("event: onChangeContentControl");
    console.log("Tag: " + control.Tag);
    console.log("Id: " + control.Id);
    console.log("Lock: " + control.Lock);
    console.log("InternalId: " + control.InternalId);
    console.log("Alias: " + control.Alias);
    console.log("Appearance: " + control.Appearance);
});
```
