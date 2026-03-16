# npm Registry

Follow these steps to install and run the DocSpace MCP server directly
from the npm registry.

## Node.js Application

Running the Node.js application requires [Node.js] version 18 or higher to be
installed on your system.

1. Run the latest version of the DocSpace MCP server:

```sh
npx --yes @onlyoffice/docspace-mcp
```

To run a specific version:

```sh
npx --yes @onlyoffice/docspace-mcp@<version>
```

2. Open a different terminal session and enter this chained command to confirm the MCP server is running in the background.

**For Linux/MacOS**:

```sh
ps aux | grep onlyoffice
```

You should see a list of running `onlyoffice` processes. 

The `ps aux` command lists all running processes, including those not attached to a terminal - like the MCP server, and then uses the `grep` command to filter the list for the running processes containing `onlyoffice`.


## References

- [npm Registry: ONLYOFFICE DocSpace MCP Server]

<!-- Footnotes  -->

[Node.js]: https://nodejs.org/

[npm Registry: ONLYOFFICE DocSpace MCP Server]: https://www.npmjs.com/package/@onlyoffice/docspace-mcp
