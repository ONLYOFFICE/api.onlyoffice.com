# onHideContentControlTrack

当内容控件在文档中失去焦点时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| ids | string[] | 已失去焦点的内容控件 ID 数组。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onHideContentControlTrack", (ids) => {
    console.log("event: onHideContentControlTrack");
    for (let i = 0; i < ids.length; i++) {
        console.log("Id: " + ids[i]);
    }
});
```
