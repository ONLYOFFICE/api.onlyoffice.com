---
sidebar_position: -3
---

# How to call methods

To execute certain editor methods using the plugin, define the **executeMethod** method.

The *callback* is the result that the method returns. It is an optional parameter. In case it is missing, the *window.Asc.plugin.onMethodReturn* function will be used to return the result of the method execution.

## executeMethod

### Parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name     | Type     | Description                                               |
|----------|----------|-----------------------------------------------------------|
| name     | string   | The name of the specific method that must be executed.    |
| params   | array    | The arguments that the method in use has (if it has any). |
| callback | function | The result that the method returns.                       |

```mdx-code-block
</APITable>
```

### Returns

Type boolean

### Example

``` ts
Asc.plugin.executeMethod("methodName", [param1, param2], (returnValue) => {
  console.log(returnValue);
});
```
