# IsUndefined

如果 `CDocBuilderValue` 对象未定义，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsUndefined` 方法。

## 语法

```py
def IsUndefined(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bUndefined = globalObj.IsUndefined()
```