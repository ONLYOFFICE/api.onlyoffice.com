# 获取文档语言

返回文档的语言信息。

## 语法

```javascript
expression.GetDocumentLang();
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

string（字符串）

## 示例

```javascript
window.Asc.plugin.executeMethod("GetDocumentLang", [], function(lang) {
	let documentLang = lang || defaultLang;

	let options = Array.from($('#custom_menu option'));
	let defaultOption = options.find(function(item) {
		if (item.value == defaultLang)
			return item;
	});

	let matchOption = undefined;
	matchOption = options.find(function(item) {
		if (item.value == documentLang)
			return true;
	});
	if (!matchOption) {
		matchOption = options.find(function(item) {
			if (item.value.search(documentLang.split('-')[0]) != -1)
				return true;
		});
	}

	if (!matchOption)
		matchOption = defaultOption;

	if (matchOption) {
		$('#custom_menu').val(matchOption.value);
		$('#custom_menu').trigger('change');
	}
});
```
