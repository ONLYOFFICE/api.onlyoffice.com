# AddCustomFunction

创建新的自定义函数。
函数参数和结果的描述使用 JSDoc 指定。JSDoc 中需要 *@customfunction* 标签。
参数和结果可以指定为 *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* 类型。
参数可以是必需的或可选的。用户还可以设置默认值。
传递的函数可以是异步的（async 函数或返回 Promise 的函数）。
在传递的函数内部，可以使用 *this.address* 访问执行计算的当前单元格地址。
还可以使用 *this.args[0].address*、*this.args[1].address* 等访问函数参数的地址。
此方法不用于 ONLYOFFICE Document Builder。请改用 AddCustomFunctionLibrary。

## 语法

```javascript
expression.AddCustomFunction(fCustom);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fCustom | 必需 | function |  | 用于计算的新函数。可以是同步或异步的。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例计算自定义函数结果。

```javascript editor-xlsx
// How to add custom function.

// How to use custom function.

// How to add cell values using custom function.

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

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('=ADD(1,2)');
```
