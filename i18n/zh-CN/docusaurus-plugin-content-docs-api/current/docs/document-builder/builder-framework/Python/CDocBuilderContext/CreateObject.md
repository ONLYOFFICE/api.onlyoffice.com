# CreateObject（创建对象）

创建一个空对象，类似于 JavaScript 中的 `{}`。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderContext.CreateObject` 方法。

## 语法

```py
def CreateObject(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateObject()
```