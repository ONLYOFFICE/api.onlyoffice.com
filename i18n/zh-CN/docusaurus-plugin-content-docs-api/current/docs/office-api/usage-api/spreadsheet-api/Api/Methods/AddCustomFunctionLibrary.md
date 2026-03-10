# AddCustomFunctionLibrary

注册新的自定义函数库（请参阅 -**SetCustomFunctions** 插件方法）。
函数参数和结果的描述使用 JSDoc 指定。JSDoc 中需要 *@customfunction* 标签。
参数和结果可以指定为 *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* 类型。
参数可以是必需的或可选的。用户还可以设置默认值。

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

此示例计算自定义函数结果。

```javascript editor-xlsx
// How to add custom function library.

// How to use custom function.

// How to add cell values using custom function library.

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
