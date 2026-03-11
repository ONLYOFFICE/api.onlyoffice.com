# onSlideShowSlideChanged

幻灯片放映演示期间幻灯片更改时调用的函数。提供当前幻灯片和上一张幻灯片的信息。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| data | Object | 包含幻灯片信息的对象。 |
| data.slideIndex | number | 新幻灯片的索引。 |
| data.previousSlideIndex | number | 上一张幻灯片的索引（如果是第一张幻灯片则为 -1）。 |

```javascript
window.Asc.plugin.attachEditorEvent('onSlideShowSlideChanged', (data) => {
	data.previousSlideIndex === -1
		? console.log(`This is the first slide that we are showing
			since the presentation slide show started`)
		: console.log(`Slide changed during presentation:
			from slide index ${data.previousSlideIndex}
			to slide index ${data.slideIndex}`);
});
```

