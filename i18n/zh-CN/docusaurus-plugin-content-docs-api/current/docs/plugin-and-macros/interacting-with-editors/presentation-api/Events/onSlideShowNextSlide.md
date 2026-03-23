# onSlideShowNextSlide

幻灯片放映演示期间幻灯片更改并显示后调用的函数。
在幻灯片内容实际显示之前触发。

## 参数

此事件没有参数。

```javascript
window.Asc.plugin.attachEditorEvent('onSlideShowNextSlide', () => {
    console.log('Moved to the next slide during presentation slide show');
});
```

