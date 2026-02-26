# Build From Source

This guide shows the different ways to build the DocSpace MCP server from source code using the following formats: 

- [Docker Image](#docker-image)
- [Node.js Application](#nodejs-application)
- [MCP Bundle](#mcp-bundle)

:::note
Building the DocSpace MCP server with a Node.js app or MCP bundle requires [Node.js] version 24 or higher to be installed on your system.
:::

## Docker Image

Building and using the Docker image requires [Docker] to be installed on your
system.

1. Clone the repository from the company's Git server:

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

3. Build the Docker image:

  ```sh
  docker build --tag onlyoffice/docspace-mcp .
  ```

4. Run the Docker container:

  ```sh
  docker run --interactive --rm onlyoffice/docspace-mcp
  ```

## Node.js Application

This project uses [mise](https://mise.jdx.dev/getting-started.html), a polyglot tool version manager, to manage development tool versions. If you have experience with tools like [asdf], [nvm], [nodenv], or similar, you will find this familiar.

1. Clone the repository from the company's Git server:

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

3. Build the Node.js application:

  ```sh
  pnpm build-app
  ```

4. Run the Node.js application:

  ```sh
  ./bin/onlyoffice-docspace-mcp
  ```

## MCP Bundle

This project uses [mise], a polyglot tool version manager, to manage development
tool versions. If you have experience with tools like [asdf], [nvm], [nodenv],
or similar, you will find this familiar.

1. Clone the repository from the company's Git server:

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

3. Build the MCP Bundle:

  ```sh
  pnpm build-mcpb
  ```

4. Use the built `.mcpb` file from the root of the project directory in an
  application that supports MCP bundles.

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
