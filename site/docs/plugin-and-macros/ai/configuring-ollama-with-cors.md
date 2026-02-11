# Configuring Ollama with CORS

## Configuring OLLAMA_ORIGINS for local requests

To enable proper handling of requests from local applications and browsers, you need to configure the `OLLAMA_ORIGINS` environment variable, which defines allowed Origin header values.

### Setting the environment variable

:::note
The environment variable must be set before starting Ollama service. If Ollama is already running, you must restart it after setting the variable.
:::

#### Linux (systemd service)

Most Linux installations run Ollama as a systemd service. To configure environment variables:

```bash
sudo systemctl edit ollama
```

Add the following content:

```ini
[Service]
Environment="OLLAMA_ORIGINS=http://*,https://*,onlyoffice://*"
```

Apply changes:

```bash
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

To verify the variable is set:

```bash
systemctl show ollama --property=Environment
```

#### Linux (manual start)

If you run Ollama manually without systemd:

```bash
export OLLAMA_ORIGINS=http://*,https://*,onlyoffice://*
ollama serve
```

#### macOS

Ollama on macOS runs as a standalone application. There are several ways to set environment variables:

**Option 1: Using launchctl (recommended)**

```bash
launchctl setenv OLLAMA_ORIGINS "http://*,https://*,onlyoffice://*"
```

After setting the variable, quit and restart the Ollama application.

**Option 2: Adding to shell profile**

Add to `~/.zshrc` or `~/.bash_profile`:

```bash
export OLLAMA_ORIGINS=http://*,https://*,onlyoffice://*
```

Then restart the Ollama application from a new terminal session.

#### Windows

**PowerShell (current session only):**

```powershell
$env:OLLAMA_ORIGINS = "http://*,https://*,onlyoffice://*"
ollama serve
```

**PowerShell (permanent, requires new session):**

```powershell
setx OLLAMA_ORIGINS "http://*,https://*,onlyoffice://*"
```

After using `setx`, close and reopen PowerShell, then start Ollama.

#### Docker

```bash
docker run -d \
  -e OLLAMA_ORIGINS="http://*,https://*,onlyoffice://*" \
  -p 11434:11434 \
  -v ollama:/root/.ollama \
  ollama/ollama
```

### Value descriptions

- `http://*` - allows requests from any HTTP domains
- `https://*` - allows requests from any HTTPS domains
- `onlyoffice://*` - allows requests from ONLYOFFICE embedded WebViews (for AI plugin functionality)

### Verifying CORS configuration

After configuring the environment variable and starting Ollama, you can verify the presence of CORS headers in the server response:

```bash
curl -v -X OPTIONS http://localhost:11434/api/tags \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: GET"
```

The expected response should contain the following headers:

```
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

Alternative verification method using a GET request:

```bash
curl -v http://localhost:11434/api/tags \
  -H "Origin: http://localhost:3000"
```

The response should include an `Access-Control-Allow-Origin` header matching the specified Origin.

### Use cases

- ONLYOFFICE Desktop with AI plugin
- Local web applications on different ports/hosts
- Electron/React applications interacting with Ollama API

### Security recommendations

Using wildcard values (`*`) opens API access from all domains, which is not recommended for public servers. For production environments, specify explicit domains:

```bash
OLLAMA_ORIGINS=http://localhost:3000,https://ollama.example.com
```

---

## Configuring OLLAMA_ORIGINS for network requests via SSL

To accept requests from other machines on the network via HTTPS protocol, the following configuration is required.

### Network interface configuration

:::note
These environment variables must be set before starting Ollama service.
:::

By default, Ollama listens only on localhost. To enable network access, specify:

#### Linux (systemd)

```bash
sudo systemctl edit ollama
```

```ini
[Service]
Environment="OLLAMA_ORIGINS=http://*,https://*,onlyoffice://*"
Environment="OLLAMA_HOST=0.0.0.0"
```

```bash
sudo systemctl daemon-reload
sudo systemctl restart ollama
```

#### Linux (manual) / macOS

```bash
export OLLAMA_HOST=0.0.0.0
export OLLAMA_PORT=11434
```

#### Docker

```bash
docker run -d \
  -e OLLAMA_ORIGINS="https://*" \
  -e OLLAMA_HOST="0.0.0.0" \
  -p 11434:11434 \
  -v ollama:/root/.ollama \
  ollama/ollama
```

:::warning
This configuration exposes the API to the entire network. Additional security measures (reverse proxy, authentication) are mandatory.
:::

### Configuring allowed SSL origins

:::note
The `OLLAMA_ORIGINS` variable must be set before starting Ollama service.
:::

For access from web interfaces on other domains/servers, for example `https://ollama-ui.my.local`:

```bash
export OLLAMA_ORIGINS=https://ollama-ui.my.local,https://ui.example.org
```

Alternative with wildcard:

```bash
export OLLAMA_ORIGINS=https://*
```

### Starting the service

```bash
ollama serve
```

Or with explicit parameters:

```bash
ollama serve --host 0.0.0.0 --port 11434
```

### Important security notes

Direct access to Ollama via public IP/HTTPS without additional protection presents a significant security risk. It is recommended to use a reverse proxy with TLS termination and authentication mechanism.

---

## Nginx configuration as HTTPS reverse proxy

This configuration provides secure HTTPS access to Ollama API through Nginx with CORS support.

### Requirements

- Installed Nginx
- Valid SSL certificate (Let's Encrypt or other CA)
- Running Ollama instance on port 11434

### Basic Nginx configuration

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name ollama.example.com;
    return 301 https://$host$request_uri;
}

# Main HTTPS server
server {
    listen 443 ssl;
    server_name ollama.example.com;

    ssl_certificate /etc/letsencrypt/live/ollama.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ollama.example.com/privkey.pem;

    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    # Handle preflight OPTIONS requests
    if ($request_method = OPTIONS) {
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization,Origin,Accept,Content-Type' always;
        add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS' always;
        return 204;
    }

    location / {
        proxy_pass http://localhost:11434;

        # CORS headers (always flag ensures headers are added for all response codes)
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization,Origin,Accept,Content-Type' always;
        add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS' always;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket and streaming support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Increased timeouts for long-running operations
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
        
        # Disable buffering for streaming responses
        proxy_buffering off;
    }
}
```

### Additional protection via HTTP basic authentication

To restrict API access:

```nginx
location / {
    auth_basic "Restricted Access";
    auth_basic_user_file /etc/nginx/.ollama_passwd;

    proxy_pass http://localhost:11434;
    
    # CORS headers
    add_header 'Access-Control-Allow-Origin' '*' always;
    add_header 'Access-Control-Allow-Credentials' 'true' always;
    add_header 'Access-Control-Allow-Headers' 'Authorization,Origin,Accept,Content-Type' always;
    add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS' always;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";

    proxy_read_timeout 300s;
    proxy_connect_timeout 75s;
    proxy_buffering off;
}
```

To create the password file, use the htpasswd utility:

```bash
sudo htpasswd -c /etc/nginx/.ollama_passwd admin
```

### Testing Nginx configuration

Before reloading Nginx, always test the configuration:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Key configuration aspects

- **CORS headers with `always` flag** are mandatory for proper cross-domain request handling from ONLYOFFICE and other browser clients. The `always` flag ensures headers are added even for error responses (4xx, 5xx).
- **The `proxy_read_timeout` parameter** is increased to 300 seconds to handle long-running operations with language models, which may require significant time for response generation.
- **SSL/TLS encryption** ensures traffic protection during network API access.
- **WebSocket support** is necessary for proper streaming response functionality from models in real-time.
- **Disabled buffering** (`proxy_buffering off`) allows streaming responses to be sent to the client immediately.

---

## Troubleshooting

### Environment variable is set but CORS doesn't work

**Symptom:** You set `OLLAMA_ORIGINS` but requests still fail with CORS errors.

**Solution:** The Ollama service must be restarted after setting environment variables.

For systemd:
```bash
sudo systemctl restart ollama
```

For Docker:
```bash
docker restart <container_name>
```

For macOS app: Quit and relaunch the application.

### CORS works with curl but not in browser

**Symptom:** `curl` requests succeed, but browser requests fail.

**Possible causes:**
1. The `Origin` header sent by the browser doesn't match allowed origins
2. Browser is caching a previous failed CORS response

**Solutions:**
1. Check browser Developer Tools (Network tab) to see the exact `Origin` being sent
2. Clear browser cache or test in incognito mode
3. Ensure your `OLLAMA_ORIGINS` includes the exact origin (protocol + domain + port)

### How to check current environment variables

**Linux (systemd):**
```bash
systemctl show ollama --property=Environment
```

**Linux (running process):**
```bash
cat /proc/$(pgrep ollama)/environ | tr '\0' '\n' | grep OLLAMA
```

**Docker:**
```bash
docker inspect <container_name> | grep -A 10 "Env"
```

### Connection refused on port 11434

**Symptom:** Cannot connect to Ollama from another machine.

**Solutions:**
1. Ensure `OLLAMA_HOST=0.0.0.0` is set (not just localhost)
2. Check firewall rules:
   ```bash
   sudo ufw allow 11434/tcp
   ```
3. Verify Ollama is listening on all interfaces:
   ```bash
   ss -tlnp | grep 11434
   ```

### Nginx returns 502 Bad Gateway

**Symptom:** Nginx is configured but returns 502 errors.

**Solutions:**
1. Verify Ollama is running: `systemctl status ollama`
2. Check if Ollama is accessible locally: `curl http://localhost:11434/api/tags`
3. Check Nginx error logs: `tail -f /var/log/nginx/error.log`
4. Ensure SELinux isn't blocking the connection (on RHEL/CentOS):
   ```bash
   sudo setsebool -P httpd_can_network_connect 1
   ```

### Streaming responses not working

**Symptom:** Responses arrive all at once instead of streaming.

**Solutions:**
1. Add `proxy_buffering off;` to Nginx location block
2. Ensure WebSocket headers are configured:
   ```nginx
   proxy_http_version 1.1;
   proxy_set_header Upgrade $http_upgrade;
   proxy_set_header Connection "upgrade";
   ```

---

## Solution architecture

```
┌─────────────────┐     HTTPS      ┌─────────────────┐     HTTP      ┌─────────────────┐
│   ONLYOFFICE    │ ──────────────── │      Nginx      │ ───────────── │     Ollama      │
│   (Browser/     │    :443        │  (Reverse Proxy │   :11434      │    (LLM API)    │
│    Desktop)     │                │   + TLS + CORS) │               │                 │
└─────────────────┘                └─────────────────┘               └─────────────────┘
```

Component interaction follows this scheme:
- ONLYOFFICE UI connects to Nginx via HTTPS protocol
- Nginx functions as a reverse proxy with CORS handling and forwards requests to the local Ollama instance on port 11434
- Nginx provides TLS termination and access control
- The `OLLAMA_ORIGINS` variable controls allowed request sources
- The ONLYOFFICE AI plugin uses a secure HTTPS endpoint to connect to language models