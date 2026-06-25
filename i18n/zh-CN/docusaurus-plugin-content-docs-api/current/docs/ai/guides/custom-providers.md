---
sidebar_position: -3
---

# 添加自定义提供商

任何自定义提供商都可以添加到 AI 插件中。为此，请按照以下说明操作。

## 先决条件 {#prerequisites}

- **基础 URL**。发送 API 请求的网络地址。在某些情况下，基础 URL 可能包含指定所使用模型的端点：

  ```ini
  https://ai-provider-base-url
  ```

- **模型版本**。所访问模型的版本。有时，模型版本会包含在基础 URL 中：

  ```ini
  https://ai-provider-base-url/v1
  ```

  在这个示例中，模型版本是 **v1**。

- **API 密钥**。服务提供商提供的唯一密钥，用于身份验证。

## 步骤 1. 创建外部 JavaScript 文件 {#create-js-file}

要添加自定义提供商并在 AI 插件的可用提供商列表中显示它，请创建并上传一个外部 JS 文件。此类文件的示例可在[此处](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/engine/providers/internal/openai.js)找到。

从此文件解析的自定义提供商是 [`Provider`](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/engine/providers/provider.js) 类的实例，该类扩展了 `AI.Provider`。此类管理插件中所有可用的提供商。

#### Provider 类

```ts
class Provider {
    constructor(name, url, key, addon) {
        this.name  = name  || "";
        this.url   = url   || "";
        this.key   = key   || "";
        this.addon = addon || "";

        this.models = [];
        this.modelsUI = [];
    }
}
```

#### 参数

| 名称   | 类型   | 示例                                                | 描述                                                                 |
|--------|--------|-----------------------------------------------------|----------------------------------------------------------------------|
| name   | string | `"阿里云"`                                          | 将在插件中显示的提供商名称。                                         |
| url    | string | `"https://dashscope.aliyuncs.com/compatible-mode"` | 发送 API 请求的网络地址。                                            |
| key    | string | `"yourAPIKey"`                                     | 提供商颁发的 API 密钥。这是一个可选字段。有些提供商可能需要密钥才能访问。 |
| addon  | string | `"v1"`                                             | URL 附加内容（例如，版本标签）。                                      |

#### 示例

```ts
"use strict";

class Provider extends AI.Provider {

    constructor() {
        super("阿里云", "https://dashscope.aliyuncs.com/compatible-mode", "yourAPIKey", "v1");
    }
}
```

## 步骤 2. 添加自定义提供商

要将自定义提供商添加到 AI 插件：

1. 打开 ONLYOFFICE 编辑器顶部工具栏中的 **AI** 选项卡。
2. 选择 **设置**。
3. 在 **AI 配置** 窗口中，选择 **编辑 AI 模型**。
4. 在 **AI 模型列表** 窗口中，点击 ![编辑图标](/assets/images/plugins/edit.svg#gh-light-mode-only)![编辑图标](/assets/images/plugins/edit.dark.svg#gh-dark-mode-only) 来编辑模型。
5. 在 **编辑 AI 模型** 窗口中，点击 **自定义提供商**。

    ![自定义提供商](/assets/images/plugins/custom-providers.png#gh-light-mode-only)![自定义提供商](/assets/images/plugins/custom-providers.dark.png#gh-dark-mode-only)

6. 点击 ![加号图标](/assets/images/plugins/plus.svg#gh-light-mode-only)![加号图标](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only) 并上传包含您的自定义提供商设置的 JavaScript 文件。

    ![添加自定义提供商](/assets/images/plugins/add-custom-provider.png#gh-light-mode-only)![添加自定义提供商](/assets/images/plugins/add-custom-provider.dark.png#gh-dark-mode-only)

7. 点击 **返回** 退出 **自定义提供商** 窗口。
8. 在 **编辑 AI 模型** 窗口的列表中选择您的自定义提供商，然后点击 **确定**。
9. 点击 **返回** 退出 **AI 模型列表** 窗口。
10. 在 **AI 配置** 窗口中为特定任务设置自定义提供商模型。

AI 插件已完全配置好，可处理各种任务。
