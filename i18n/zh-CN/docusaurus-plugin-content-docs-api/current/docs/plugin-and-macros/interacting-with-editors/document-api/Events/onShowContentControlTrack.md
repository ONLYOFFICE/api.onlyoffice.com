# onShowContentControlTrack

当内容控件获得焦点并显示其轨道时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| ids | string[] | 已获得焦点的内容控件 ID 数组。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onShowContentControlTrack", (ids) => {
    console.log("event: onShowContentControlTrack");
    for (let i = 0; i < ids.length; i++) {
        console.log("Id: " + ids[i]);
    }
});
```
