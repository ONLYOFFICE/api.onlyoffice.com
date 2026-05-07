# onChangeCurrentSlide

当前幻灯片发生更改时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| index | number | 新激活幻灯片的索引。 |

```javascript
window.Asc.plugin.attachEditorEvent('onChangeCurrentSlide', (index) => {
    console.log('Current slide changed to index: ' + index);
});
```

