# IsEmpty（是否为空）

如果 `CDocBuilderValue` 对象为空，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsEmpty` 方法。

## 语法

```py
def IsEmpty(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bEmpty = globalObj.IsEmpty()
```