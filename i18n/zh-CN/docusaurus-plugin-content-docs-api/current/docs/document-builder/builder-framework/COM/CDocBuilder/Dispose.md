# Dispose（释放）

当不再需要 ONLYOFFICE 文档生成器时，将其从应用程序内存中卸载。通常情况下，在退出进程退出进程之前无需释放 JS，它会自动进行。只有当进程需要 JS 所占用的资源时，才应该使用此方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.Dispose` 方法。

## 语法

```cpp
HRESULT Dispose();
```

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->Dispose();
```