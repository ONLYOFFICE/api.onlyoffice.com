# AddCustomFunctionLibrary

Registers a new custom functions library (see the - **SetCustomFunctions** plugin method).
The description of the function parameters and result is specified using JSDoc. The *@customfunction* tag is required in JSDoc.
Parameters and results can be specified as the *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* types.
Parameters can be required or optional. A user can also set a default value.

## 语法

```javascript
expression.AddCustomFunctionLibrary(sName, Func);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 库名称。 |
| Func | 必需 | function |  | 自定义函数库代码。 |

## 返回值

此方法不返回任何数据。

## 示例

将相关的自定义函数捆绑到命名库中并在电子表格的单元格中使用。

```javascript editor-xlsx
// How do I group custom functions under a shared library name in a spreadsheet?

// Organize reusable calculation logic inside a function library in a spreadsheet.

Api.AddCustomFunctionLibrary("LibraryName", function(){
	/**
	 * Function that returns the argument
	 * @customfunction
	 * @param {number} first First argument.
	 * @param {number} second Second argument.
	 * @returns {number} The sum of the numbers.
	 */
	Api.AddCustomFunction(function ADD(first, second) {
		return first + second;
	});
});

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('=ADD(1,2)');
```
