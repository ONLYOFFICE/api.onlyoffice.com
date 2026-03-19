---
sidebar_label: Distribution
title: Get the MCP server
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page explains and demonstrates the various ways users can get the MCP server. This page explains each option and helps you choose the one that best fits your setup.

## Choosing a distribution method

Before choosing a distribution method, consult the following table:

| **I want to**                                | **Recommended method**         |
|----------------------------------------------|--------------------------------|
| Get started quickly with minimal setup       | npm registry, Docker Hub       |   |   |   |   |   |   |   |   |
| Run in an isolated, reproducible environment | Docker Hub, Docker MCP toolkit |   |   |   |   |   |   |   |   |
| Use a GUI to manage everything               | Docker MCP toolkit             |   |   |   |   |   |   |   |   |
| Install a specific version offline           | Github releases                |   |   |   |   |   |   |   |   |
| Customize or contribute to the server        | Build from source              |   |   |   |   |   |   |   |   |

:::tip 
We recommend Docker Hub as it offers a minimal, easy setup to get started, in addition to an isolated environment.
:::

## Building the MCP server

<Tabs>
<TabItem value="build-source" label="Build from source">

This method is ideal for developers who want to customize or contribute to the project. You can build from source using three methods, with each having its own prerequisites:

| **Build**  | **Prerequisites**                             |
|------------|-----------------------------------------------|
| Docker     | Docker                                        |
| Node.js    | pnpm (v10 or higher), Node.js (v24 or higher) |
| MCP bundle | pnpm (v10 or higher), Node.js (v24 or higher) |

### Build the MCP server from source

1. Clone the repository from the ONLYOFFICE Git server:

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

3. Build in your preferred format:

<details>
<summary>Build with Docker image</summary>

4. Build the Docker image:

   ```sh
   docker build --tag onlyoffice/docspace-mcp .
   ```

5. Run the Docker container:

   ```sh
   docker run --interactive --rm onlyoffice/docspace-mcp

</details>

<details>

<summary>Build with Node.js app</summary>

4. Build the Node.js application:

   ```sh
   pnpm build-app
   ```

5. Run the Node.js application:

   ```sh
   ./bin/onlyoffice-docspace-mcp

</details>

<details>
<summary>Build with MCP bundle</summary>

4. Build the MCP Bundle:

   ```sh
   pnpm build-mcpb
   ```

5. Use the built `.mcpb` file from the root of the project directory in an application that supports MCP bundles.

</details>

### References

- [GitHub ONLYOFFICE: DocSpace MCP Server](https://github.com/ONLYOFFICE/docspace-mcp/)

</TabItem>
<TabItem value="docker-hub" label="Docker Hub">
 
This method is ideal for developers who want a consistent, isolated runtime environment with minimal setup. Before starting:

- Ensure to have [Docker](https://www.docker.com/) installed on your system.

### Build with Docker Hub

1. Pull the latest DocSpace MCP server image from Docker Hub:

   ```sh
   docker pull onlyoffice/docspace-mcp
   ```

   To pull a specific version:

   ```sh
   docker pull onlyoffice/docspace-mcp:<version>
   ```

2. Run the Docker container:

   ```sh
   docker run --interactive --rm onlyoffice/docspace-mcp
   ```

### References

- [Docker Hub: ONLYOFFICE DocSpace MCP Server](https://hub.docker.com/r/onlyoffice/docspace-mcp)

</TabItem>

<TabItem value="docker-mcp" label="Docker MCP toolkit">

This method works best for non-technical users or users who prefer a graphical interface over the command line. Before proceeding, ensure to have:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) with the [Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) enabled

### Build with Docker MCP toolkit

1. Enable the Docker MCP Toolkit by following the [Enable Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#enable-docker-mcp-toolkit) guide.

2. Install the DocSpace MCP server through the Docker Desktop interface using the [Install an MCP Server](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#install-an-mcp-server) guide, or by using the Docker CLI:

   ```sh
   docker mcp server enable onlyoffice-docspace
   ```

3. Connect the DocSpace MCP server to an MCP client through the Docker Desktop interface using the [Install an MCP Client](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#install-an-mcp-client) guide, or by using the Docker CLI:

   ```sh
   docker mcp client connect --global <client>
   ```

### References

- [Docker Docs: MCP Catalog and Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/)
- [Docker MCP: ONLYOFFICE DocSpace](https://hub.docker.com/mcp/server/onlyoffice-docspace/)

</TabItem>

<TabItem value="npm-registry" label="npm registry">

This method also requires minimal setup and is ideal for developers who want the fastest setup with no containerization overhead. Ensure you have:

- [Node.js](https://nodejs.org/) version 18 or higher

### Build with npm registry

1. Run the latest version of the DocSpace MCP server:

   ```sh
   npx --yes @onlyoffice/docspace-mcp
   ```

   To run a specific version:

   ```sh
   npx --yes @onlyoffice/docspace-mcp@<version>
   ```

2. Open a different terminal session and confirm the MCP server is running:

   ```sh
   ps aux | grep onlyoffice
   ```

   You should see a list of running `onlyoffice` processes.


</TabItem>

<TabItem value="github-releases" label="Github releases">

This method is ideal for teams who want to have access without pulling from a registry at runtime. This method also requires you to have [Node.js](https://nodejs.org/) version 18 or higher and is available in two formats:

- As an MCP bundle
- A Node.js application

### Build with the MCP bundle Github release

Use this format if your MCP client supports `.mcpb` bundle files natively (e.g., Claude Desktop Extensions).

1. Download the latest release:

   ```sh
   VERSION=3.1.0 curl --location --output docspace-mcp.mcpb https://github.com/ONLYOFFICE/docspace-mcp/releases/v$VERSION/download/onlyoffice-docspace-mcp-$VERSION.mcpb
   ```

   To download a specific version:

   ```sh
   VERSION=<version> curl --location --output docspace-mcp.mcpb https://github.com/ONLYOFFICE/docspace-mcp/releases/v$VERSION/download/onlyoffice-docspace-mcp-$VERSION.mcpb
   ```

2. Use the downloaded `.mcpb` file in an application that supports MCP bundles.

### Build with the Node.js app Github release

Use this format if you prefer to run the server as a standard Node.js process.

1. Download the latest release:

   ```sh
   VERSION=3.1.0 curl --location --output docspace-mcp.tgz https://github.com/ONLYOFFICE/docspace-mcp/releases/v$VERSION/download/onlyoffice-docspace-mcp-$VERSION.tgz
   ```

   To download a specific version:

   ```sh
   VERSION=<version> curl --location --output docspace-mcp.tgz https://github.com/ONLYOFFICE/docspace-mcp/releases/v$VERSION/download/onlyoffice-docspace-mcp-$VERSION.tgz
   ```

2. Extract the downloaded archive:

   ```sh
   tar --extract --gzip --file docspace-mcp.tgz
   ```

3. Navigate to the extracted directory:

   ```sh
   cd docspace-mcp
   ```

4. Run the Node.js application:

   ```sh
   ./bin/onlyoffice-docspace-mcp
   ```

</TabItem>
</Tabs>