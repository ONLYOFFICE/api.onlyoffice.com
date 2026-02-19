# dispose（释放）

当不再需要 ONLYOFFICE 文档构建器时，将其从应用程序内存中卸载。通常情况下，在退出进程之前无需释放 JS，这一操作会自动进行。只有当进程需要 JS 所占用的资源时，才需要使用此方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.dispose` 方法。

## 语法

```java
void dispose();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilder.dispose();
```