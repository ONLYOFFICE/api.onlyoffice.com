---
sidebar_position: -3
---

# 如何调用方法

要通过插件执行某些编辑器方法，需要定义 **executeMethod** 方法。

callback 是方法返回的结果，是一个可选参数。如果未传入该参数，则会使用 window.Asc.plugin.onMethodReturn 函数来返回方法执行结果。

## 调用方法

### 参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称    | 类型     | 描述                                               |
|----------|----------|-----------------------------------------------------------|
| name     | string   | 要执行的具体方法名称。    |
| params   | array    | 该方法所需的参数（如果有的话）。 |
| callback | function | 方法返回的结果。                       |

```mdx-code-block
</APITable>
```

### 返回值：

boolean 类型

### 示例：

``` ts
Asc.plugin.executeMethod("methodName", [param1, param2], (returnValue) => {
  console.log(returnValue)
})
```
