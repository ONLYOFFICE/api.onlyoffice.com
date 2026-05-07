---
sidebar_position: 4
---

# Test environment setup

A complete plugin development environment consists of a code editor, a local HTTP server, and at least one ONLYOFFICE installation to test against.

## Recommended tools

| Tool | Purpose |
|------|---------|
| VS Code | Plugin code editing |
| Git | Version control |
| Node.js | Local HTTP server, build tooling |
| ONLYOFFICE Desktop Editors | Local testing without a server |
| Docker | Run ONLYOFFICE Docs locally |

## Starting a local HTTP server

```bash
npx http-server ./my-plugin --port 8080 --cors
```

The `--cors` flag allows the web editor to load your plugin from a different origin.

## Test checklist

Before releasing a plugin, test it in each target environment:

- [ ] ONLYOFFICE Desktop Editors (Windows, macOS, or Linux)
- [ ] ONLYOFFICE web editor (Chrome or Chromium-based browser)
- [ ] On-premises ONLYOFFICE Docs (if targeting enterprise)
- [ ] ONLYOFFICE Cloud (if targeting cloud users)

## Additional resources

- [Desktop Editors installation](./desktop-editors-installation.md)
- [Docs (on-premises) installation](./docs-on-premises-installation.md)
- [Cloud/SaaS installation](./cloud-saas-installation.md)
- [Browser DevTools guide](../debugging/browser-devtools-guide.md)
