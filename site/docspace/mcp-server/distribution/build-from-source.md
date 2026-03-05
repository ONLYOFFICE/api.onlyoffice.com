---
sidebar_label: Build from source
sidebar_position: 1
title: Build from source
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide shows the different ways to build the DocSpace MCP server from source code using the following formats: 

- Docker Image
- Node.js Application
- MCP Bundle

## Before you start

- Building the DocSpace MCP server with a Node.js app or MCP bundle requires [Node.js] version 18 or higher to be installed on your system.

## Building the MCP server

1. Clone the repository from ONLYOFFICE Git server

  ```sh
  git clone git@git.onlyoffice.com:ONLYOFFICE/docspace-mcp.git
  ```

  Alternatively, clone from the GitHub mirror:

  ```sh
  git clone git@github.com:ONLYOFFICE/docspace-mcp.git
  ```

2. Navigate to the project directory:

  ```sh
  cd docspace-mcp
  ```

3. Build the MCP server by running the commands based on your desired format: 

<Tabs>
  <TabItem value="docker image" label="Build from Docker image" default>

4. Build the Docker image:

  ```sh
  docker build --tag onlyoffice/docspace-mcp .
  ```

5. Run the Docker container:

  ```sh
  docker run --interactive --rm onlyoffice/docspace-mcp
  ```

</TabItem>

<TabItem value="build from node app" label="Build with Nodejs app" default>

4. Build the Node.js application:

  ```sh
  pnpm build-app
  ```

5. Run the Node.js application:

  ```sh
  ./bin/onlyoffice-docspace-mcp
  ```

</TabItem>

<TabItem value="build from mcp bundle" label="Build from MCP bundle" default>

4. Build the MCP Bundle:

  ```sh
  pnpm build-mcpb
  ```

5. Use the built `.mcpb` file from the root of the project directory in an
  application that supports MCP bundles.

</TabItem>
</Tabs>

<!-- Footnotes  -->

[asdf]: https://asdf-vm.com/
[Docker]: https://www.docker.com/
[mise]: https://mise.jdx.dev/
[Node.js]: https://nodejs.org/
[nodenv]: https://github.com/nodenv/nodenv/
[nvm]: https://github.com/nvm-sh/nvm/
[pnpm]: https://pnpm.io/

[Docker Docs: What is an image?]: https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/
[GitHub Anthropic: MCP Bundles]: https://github.com/anthropics/mcpb/
[GitHub ONLYOFFICE: DocSpace MCP Server]: https://github.com/ONLYOFFICE/docspace-mcp/
