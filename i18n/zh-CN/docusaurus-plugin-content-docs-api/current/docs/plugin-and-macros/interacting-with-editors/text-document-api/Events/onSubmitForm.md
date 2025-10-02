# 提交表单回调

当用户点击“完成并提交”按钮时调用的函数。

## 参数

此事件无参数。

```javascript
window.Asc.plugin.attachEditorEvent("onSubmitForm", () => {
	Asc.scope.st = "";
	this.callCommand(function() {
        let oDocument = Api.GetDocument();
		let aFormsData = oDocument.GetFormsData();
		Asc.scope.st += "event: onSubmitForm";
		Asc.scope.st += "\n";
		Asc.scope.st += "The type of the first form: " + aFormsData[0]["type"];
		Asc.scope.st += "\n";
		Asc.scope.st += "The value of the second form: " + aFormsData[1]["value"];
    }, false);
	console.log(Asc.scope.st);
});
```

