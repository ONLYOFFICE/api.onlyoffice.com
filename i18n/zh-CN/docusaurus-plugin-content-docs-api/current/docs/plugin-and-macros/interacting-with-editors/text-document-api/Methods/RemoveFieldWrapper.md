# 移除字段包装器

移除字段包装器，仅保留字段内容。

## 语法

```javascript
expression.RemoveFieldWrapper(fieldId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fieldId | 选填 | string | — | 字段 ID。如果未指定，则移除当前字段的包装器。 |

## 返回值

此方法不返回任何值。

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
