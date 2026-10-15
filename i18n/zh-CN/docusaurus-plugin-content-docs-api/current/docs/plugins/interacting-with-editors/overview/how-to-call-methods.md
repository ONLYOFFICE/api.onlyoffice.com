---
sidebar_position: -3
---

import APITable from '@site/src/components/APITable/APITable';

# 如何调用方法

要通过插件执行编辑器方法，请在 [Editor](#editor-object) 对象上调用这些方法。在 10.0 之前版本的编辑器中，请改用 [executeMethod](#executemethod) 方法。

## Editor 对象 {#editor-object}

编辑器方法通过全局 `Editor` 对象调用。每个方法都像函数一样调用，直接接收方法参数，并返回包含方法结果的 Promise：

```ts
Asc.plugin.init = async () => {
  const text = await Editor.GetSelectedText({ Numbering: false, Math: false });
  await Editor.PasteText(text.toUpperCase());
};
```

参数的传入顺序与 [executeMethod](#executemethod) 的 `params` 数组相同：

```ts
// executeMethod
Asc.plugin.executeMethod("AddComment", [{ Text: "Check this", UserName: "John Smith" }], (id) => {
  console.log(id);
});

// Editor 对象
const id = await Editor.AddComment({ Text: "Check this", UserName: "John Smith" });
console.log(id);
```

`Editor` 还提供 [RunMacro](how-to-call-commands.md#editorrunmacro) 方法，它与 `callCommand` 一样用于运行 Office JavaScript API 代码。

### 可用性 {#availability}

编辑器在启动插件时定义 `Editor`，即在调用 [init](asc-plugin.md#init) 之前。请在 `init` 及其之后运行的代码（如按钮和事件处理程序）中使用它，不要在插件脚本的顶层使用，因为此时它尚不存在。无需修改插件文件：`Editor` 由编辑器提供，而不是来自插件引入的 `plugins.js` 脚本。

如果插件已经定义了自己的全局 `Editor`，编辑器不会替换它。

### 行为 {#behavior}

- 不会检查方法名称。方法名称拼写错误或当前编辑器不存在该方法时，不会抛出错误，Promise 将以 `undefined` 解析。
- Promise 永远不会被拒绝。编辑器方法通过返回值报告失败，具体见各方法页面。
- 与 `executeMethod` 一样，方法逐个运行。在另一个调用进行期间发起的调用会在队列中等待，因此同时发起的调用（例如通过 `Promise.all`）会按发起顺序依次执行。

### 回调形式 {#callback-form}

如果最后一个参数是函数，它将像在 `executeMethod` 中一样用作回调。在这种情况下，调用不返回 Promise：

```ts
Editor.GetSelectedText({ Numbering: false, Math: false }, (text) => {
  console.log(text);
});
```

## 调用方法 {#executemethod}

`callback` 是方法返回的结果，是一个可选参数。如果未传入该参数，则会使用 `window.Asc.plugin.onMethodReturn` 函数来返回方法执行结果。

### 参数

<APITable>

| 名称    | 类型     | 描述                                               |
|----------|----------|-----------------------------------------------------------|
| name     | string   | 要执行的具体方法名称。    |
| params   | array    | 该方法所需的参数（如果有的话）。 |
| callback | function | 方法返回的结果。                       |

</APITable>

### 返回值

boolean 类型

### 示例

```ts
Asc.plugin.executeMethod("methodName", [param1, param2], (returnValue) => {
  console.log(returnValue)
})
```

## 调试

要在浏览器控制台中记录所有 `executeMethod` 和 [`callCommand`](how-to-call-commands.md) 调用，请在浏览器本地存储中设置 `asc_plugin_commands_log` 键：

```js
localStorage.setItem("asc_plugin_commands_log", "true");
```

要禁用日志，请删除该键：

```js
localStorage.removeItem("asc_plugin_commands_log");
```

该设置在页面重新加载后仍然有效。
