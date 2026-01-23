# IsFunction

如果 `CDocBuilderValue` 对象是一个函数，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsFunction` 方法。

## 语法

```py
def IsFunction(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bFunction = globalObj.IsFunction()
```