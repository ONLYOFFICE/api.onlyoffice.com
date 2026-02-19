# IsBool

如果 `CDocBuilderValue` 对象是布尔值，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsBool` 方法。

## 语法

```py
def IsBool(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bBool = globalObj.IsBool()
```