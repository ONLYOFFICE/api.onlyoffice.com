# IsSaveWithDoctrendererMode

指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.IsSaveWithDoctrendererMode` 方法。

## 语法

```cpp
HRESULT IsSaveWithDoctrendererMode([out, retval] VARIANT_BOOL* result);
```

## 参数

| **名称** | **类型**       | **描述**                                                                                              |
| -------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| result   | VARIANT_BOOL*  | 指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。                               |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->IsSaveWithDoctrendererMode(&b);
oBuilder->Dispose();
```