# CDocBuilderContext

Class used by ONLYOFFICE Document Builder for getting JS context for working.

## Syntax

```cpp
class CDocBuilderContext
```

## Instance Methods

| Method                                  | Description                                                           |
| --------------------------------------- | --------------------------------------------------------------------- |
| [CreateArray](CreateArray.md)           | Creates an array, equivalent to `new Array(length)` in JavaScript.    |
| [CreateNull](CreateNull.md)             | Creates a null value, equivalent to `null` in JavaScript.             |
| [CreateObject](CreateObject.md)         | Creates an empty object, equivalent to `{}` in JavaScript.            |
| [CreateScope](CreateScope.md)           | Creates a context scope for executing JavaScript code.                |
| [CreateTypedArray](CreateTypedArray.md) | Creates a Uint8Array value, equivalent to `Uint8Array` in JavaScript. |
| [CreateUndefined](CreateUndefined.md)   | Creates an undefined value, equivalent to `undefined` in JavaScript.  |
| [GetGlobal](GetGlobal.md)               | Returns the global object for the current context.                    |
| [IsError](IsError.md)                   | Checks for errors in JavaScript code execution.                       |
