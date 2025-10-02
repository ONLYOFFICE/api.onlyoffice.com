# 获取所有加载项字段

返回当前文档中的所有加载项字段。

## 语法

```javascript
expression.GetAllAddinFields();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有参数。

## 返回值

[添加加载项字段](../Enumeration/AddinFieldData.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod("GetAllAddinFields", null, function(fields) {
	let count = 0;
	fields.forEach(function(field) {
		if (field.Value.includes(bibPrefix) || field.Value.includes(citPrefix)) {
			count++;
			window.Asc.plugin.executeMethod("RemoveFieldWrapper", [field.FieldId], function() {
				count--;
				if (!count)
					window.Asc.plugin.executeCommand("close", "");
			});
		}
	});

	if (!fields.length)
		window.Asc.plugin.executeCommand("close", "");
});
```
