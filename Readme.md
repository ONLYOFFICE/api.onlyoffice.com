# API ONLYOFFICE Site

The [API ONLYOFFICE site](https://api.onlyoffice.com/) is the place for documentation on how to use ONLYOFFICE.

## Contributing Documentation Updates

The documentation content is formatted in markdown and can be found in the [site directory](https://github.com/ONLYOFFICE/api.onlyoffice.com.3.0/tree/master/site). Easiest way to make edits is to navigate to the markdown file to be updated, and click the Edit button in the top right (the pencil icon). After making the edit, submitting the changes will create a Pull Request (PR) for reviewed. Please feel free to ask any questions within the our [forum](https://forum.onlyoffice.com/), we're happy to help.

## Building the Site

To build the site from the source, ensure you're using the most recent versions of Node and Npm, and pull the latest from master. Next, run `npm install`, `npm run build` to build the docs files and `npm start` to launch the site in development mode.

## Generating OpenAPI Docs

### Generating All files

To generate all OpenAPI docs, run the following command from the root directory of your project:

```bash
yarn docusaurus gen-api-docs all
```

> This will generate API docs for all of the OpenAPI specification (OAS) files referenced in your `docusaurus-plugin-openapi-docs` config.

### Generating a single file

You may also generate OpenAPI docs for a single path or OAS by specifying the unique `id`:

```bash
yarn docusaurus gen-api-docs <id>
```

Example:

```bash
yarn docusaurus gen-api-docs docspaceBackend
```

> The example above will only generate API docs relative to `docspaceBackend`.

## Cleaning OpenAPI Docs

### Cleaning All files

To clean/remove all API Docs, run the following command from the root directory of your project:

```bash
yarn docusaurus clean-api-docs all
```

### Cleaning a single file

You may also remove a particular set of API docs by specifying the unique `id` of your desired spec instance.

```bash
yarn docusaurus clean-api-docs <id>
```

Example:

```bash
yarn docusaurus clean-api-docs docspaceBackend
```

> The example above will remove all API docs relative to `docspaceBackend`.

## Related

 - [ONLYOFFICE Documentation](https://api.onlyoffice.com/)
 - [ONLYOFFICE Forum](https://forum.onlyoffice.com/)
 - [ONLYOFFICE](https://onlyoffice.com/)

## License

 - [GPL-3.0](https://raw.githubusercontent.com/ONLYOFFICE/api.onlyoffice.com.3.0/master/LICENSE)
