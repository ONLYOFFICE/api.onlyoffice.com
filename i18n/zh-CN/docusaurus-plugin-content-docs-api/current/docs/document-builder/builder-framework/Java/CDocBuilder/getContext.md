# getContext

返回当前的 JS [上下文](../CDocBuilderContext/CDocBuilderContext.md)。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.getContext` 方法。

## 语法

```java
CDocBuilderContext getContext(boolean enterContext = 0);
```

## 参数

| 参数名       | 类型    | 默认值 | 描述                 |
| ------------ | ------- | ------ | -------------------- |
| enterContext | boolean | 0      | 指定是否将进入上下文 |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilder.dispose();
```