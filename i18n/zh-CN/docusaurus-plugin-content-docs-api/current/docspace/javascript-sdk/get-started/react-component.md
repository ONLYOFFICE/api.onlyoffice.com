---
sidebar_position: 2
description: 将 ONLYOFFICE DocSpace 集成到 React 项目中。
tags: ["DocSpace", "Embed SDK", "Integration", "React"]
---

# React 组件

ONLYOFFICE DocSpace React [组件](https://github.com/ONLYOFFICE/docspace-react)可将 ONLYOFFICE DocSpace 集成到 [React](https://react.dev/) 项目中。

:::info
要使用此组件，您需要拥有 ONLYOFFICE DocSpace。如果您是 DocSpace 新用户，请[创建账户](https://www.onlyoffice.com/docspace-registration.aspx?from=api)。
:::

## 先决条件

此流程需要 [Node.js（及 npm）](https://nodejs.org/en)。

## 创建带有 ONLYOFFICE DocSpace 的演示 React 应用程序

此流程将创建一个[基础 React 应用程序](https://github.com/facebook/create-react-app)并在其中安装 ONLYOFFICE DocSpace。

1. 使用 *Create React App* 包创建名为 *docspace-react-demo* 的新 React 项目：

   ``` sh
   npx create-react-app docspace-react-demo
   ```

2. 进入新创建的目录：

   ``` sh
   cd docspace-react-demo
   ```

3. 从 **npm** 安装 ONLYOFFICE DocSpace React 组件，并使用 *--save* 将其保存到 *package.json* 文件中：

   ``` sh
   npm install --save @onlyoffice/docspace-react
   ```

4. 打开 *docspace-react-demo* 项目中的 *./src/App.js* 文件，将其内容替换为以下代码：

   ``` tsx
   import {DocSpace} from "@onlyoffice/docspace-react";
   import React, {useRef} from "react";

   function onAppReady(e) {
     console.log("ONLYOFFICE DocSpace App is ready!");
   }

   function onAppError(e) {
     console.log(e);
   }

   function onLoadComponentError(errorCode, errorDescription) {
     console.log(errorDescription);
   }

   export default function App() {
     return (
       <pre>
         <DocSpace
           url="http://example-onlyoffice.com/"
           config={{
             frameId: "onlyoffice-docspace",
             mode: "manager",
             width: "100%",
             height: "100%",
             events: {
               onAppReady: "onAppReady",
               onAppError: "onAppError",
             },
           }}
           onLoadComponentError={onLoadComponentError}
         />
       </pre>
     )
   }
   ```

   将以下内容替换为您自己的数据：

   - `http://example-onlyoffice.com/` - 替换为您服务器的 URL。

   此 JavaScript 文件将创建包含配置了基本功能的 ONLYOFFICE DocSpace 的 *App* 组件。

5. 使用 Node.js 开发服务器测试应用程序：

   - 要启动开发服务器，请导航至 *docspace-react-demo* 目录并运行：

     ``` sh
     npm run start
     ```

   - 要停止开发服务器，请在命令行或命令提示符中按 *Ctrl+C*。

## 部署演示 React 应用程序

将应用程序部署到生产环境的最简单方式是安装 [serve](https://github.com/vercel/serve) 并创建静态服务器：

1. 全局安装 *serve* 包：

   ``` sh
   npm install -g serve
   ```

2. 在 3000 端口上提供您的静态站点服务：

   ``` sh
   serve -s build
   ```

   可以使用 *-l* 或 *--listen* 标志调整为其他端口：

   ``` sh
   serve -s build -l 4000
   ```

3. 要提供项目文件夹的服务，请进入该目录并运行 *serve* 命令：

   ``` sh
   cd docspace-react-demo
   serve
   ```

现在您可以将应用程序部署到创建的服务器：

1. 导航至 *docspace-react-demo* 目录并运行：

   ``` sh
   npm run build
   ```

   将会创建包含应用程序生产构建的 *build* 目录。

2. 将 *docspace-react-demo/build* 目录的内容复制到 Web 服务器的根目录（*docspace-react-demo* 文件夹）中。

应用程序将部署在 Web 服务器上（默认为 `http://localhost:3000`）。

## ONLYOFFICE DocSpace React 组件 API

### 属性

| 名称                  | 类型                                                  | 默认值  | 描述                                                                                                         |
| --------------------- | ----------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| url\*                 | string                                                | null    | ONLYOFFICE DocSpace 的地址。                                                                                 |
| config\*              | object                                                | null    | 用于打开带有令牌的文件的通用[配置对象](../usage-sdk/type-aliases/TFrameConfig.md)。                         |
| email                 | string                                                | null    | 用于登录 DocSpace 的用户电子邮件。                                                                           |
| onRequestPasswordHash | (email: string) => string                             | null    | 传递 email 参数时调用的函数，返回用于登录 DocSpace 的 *passwordHash*。                                      |
| onUnsuccessLogin      | () => void                                            | null    | DocSpace 账户登录失败时调用的函数。                                                                          |
| onLoadComponentError  | (errorCode: number, errorDescription: string) => void | null    | 加载组件时发生错误时调用的函数。                                                                             |

\* *- 必填字段*

## 安装 Storybook

安装 [Storybook](https://storybook.js.org/) 以在独立环境中开发 UI 组件：

1. 在 *.env* 文件中更改 DocSpace 的地址：

   ``` ini
   "DOCSPACE_URL": "https://example-onlyoffice.com/"
   ```

   其中 `http://example-onlyoffice.com/` 是安装了 **ONLYOFFICE DocSpace** 的服务器 URL。

2. 使用以下命令构建 Storybook：

   ``` sh
   npm run build-storybook
   ```

3. 启动 Storybook：

   ``` sh
   npm run storybook
   ```

## 开发 ONLYOFFICE DocSpace React 组件

1. 从 GitHub 仓库克隆项目：

   ``` sh
   git clone https://github.com/ONLYOFFICE/docspace-react
   ```

2. 安装项目依赖：

   ``` sh
   npm install
   ```

3. 测试组件：

   ``` sh
   npm run test
   ```

4. 构建项目：

   ``` sh
   npm run rollup
   ```

5. 创建包：

   ``` sh
   npm pack
   ```

## 反馈与支持

如果您对 ONLYOFFICE DocSpace React 组件有任何问题、疑问或建议，请参阅 [Issues](https://github.com/ONLYOFFICE/docspace-react/issues) 部分。
