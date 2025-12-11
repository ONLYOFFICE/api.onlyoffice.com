# close（关闭）

关闭当前作用域。此方法会在析构函数执行时自动调用。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContextScope.close` 方法。

## 语法

```java
void close();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderContextScope scope = context.createScope();
scope.close();
CDocBuilder.dispose();
```