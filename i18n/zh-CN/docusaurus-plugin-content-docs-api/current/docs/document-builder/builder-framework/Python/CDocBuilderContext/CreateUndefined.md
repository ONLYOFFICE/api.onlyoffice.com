# CreateUndefined

创建一个未定义的值，类似于 JavaScript 中的 `undefined`。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderContext.CreateUndefined` 方法。

## 语法

```py
def CreateUndefined(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateUndefined()
```