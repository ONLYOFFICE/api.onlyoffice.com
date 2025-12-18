# GetContext

返回当前的 JS [上下文](../CDocBuilderContext/CDocBuilderContext.md)。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetContext` 方法。

## 语法

```py
def GetContext(self);
```

## 示例

### Python

```py
import docbuilder

builder = docbuilder.CDocBuilder()
context = builder.GetContext()
```