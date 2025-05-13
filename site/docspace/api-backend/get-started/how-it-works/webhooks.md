---
sidebar_position: -3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Webhooks are HTTP/HTTPS callbacks triggered by events (triggers) related to portal entities such as Users, Groups, Documents, Folders, and Rooms. DocSpace users can create, subscribe to, and configure webhooks so that events in the portal trigger actions in external services. This functionality is useful for synchronizing and tracking specific events.

The triggers for a particular webhook are activated only if the webhook owner has access rights to the entity being modified. DocSpace users can view only their own webhooks, while DocSpace administrators can see all webhooks on the portal.

Instructions for creating and configuring webhooks can be found [here](https://helpcenter.onlyoffice.com/administration/docspace-webhooks.aspx).

API methods for working with webhooks are detailed [in this section](../../../../docspace/api-backend/usage-api/get-tenant-webhooks.api.mdx).

A full list of available triggers can be obtained via [this method](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-triggers/).

The Node.js and Python examples demonstrating how to configure and handle events with webhooks can be found [here](https://github.com/ONLYOFFICE/docspace-samples/tree/develop/webhooks).

## Webhook request

The **Accept** and **Content-Type** webhook headers must be included in the webhook request. Custom headers are not supported.

To protect data, each API request is signed with a secret key generated before sending the webhook:

<Tabs>
  <TabItem value="nodejs" label="Node.js">
    ``` ts
    const crypto = require('crypto');

    function getSecretHash(secretKey, body) {
        const hasher = crypto.createHmac('sha256', Buffer.from(secretKey, 'utf8'));
        hasher.update(Buffer.from(body, 'utf8'));
        return hasher.digest('hex').toUpperCase();
    }
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ``` py
    import hmac
    import hashlib

    def get_secret_hash(secret_key: str, body: str) -> str:
        hasher = hmac.new(secret_key.encode('utf-8'), body.encode('utf-8'), hashlib.sha256)
        return hasher.hexdigest().upper()
    ```
  </TabItem>
  <TabItem value="csharp" label="C#">
    ``` cs
    using System;
    using System.Text;
    using System.Security.Cryptography;
                        
    public static string GetSecretHash(string secretKey, string body)
    {
        using var hasher = new HMACSHA256(Encoding.UTF8.GetBytes(secretKey));
        var hash = hasher.ComputeHash(Encoding.UTF8.GetBytes(body));
        return Convert.ToHexString(hash);
    }
    ```
  </TabItem>
</Tabs>

The secret key is included in the **x-docspace-signature-256** header:

``` json
{
  "Accept": ["*/*"],
  "x-docspace-signature-256": ["sha256=0D4C9D09136103625379E0BC3AA6084E941EA2F2901A2C94FACEFE3A7F9688F3"]
}
```

The webhook request body contains:

- information about the trigger that caused the data to be sent;
- information about the webhook context where the request is executed;
- anonymized data of the entity that was modified.

## Retry policy

If the request fails, a retry policy is applied. It includes up to 5 attempts to resend the request with an interval between attempts calculated as 2 to the power of the attempt number, measured in seconds.

On each retry, additional information is added to the request body, including error details, time, and the number of attempts:

- `retryCount` - number of attempts made to send the request;
- `retryOn` - time of the current retry attempt;
- `lastFailureOn` - time of the last failed attempt to send the request;
- `lastFailureContent` - error information from the last failed attempt;
- `lastSuccessOn` - time of the last successful request for the current webhook.

SSL verification is set during the webhook configuration. See the [instructions for creating webhooks](https://helpcenter.onlyoffice.com/docspace/configuration/docspace-webhooks.aspx).

If the response contains a [410 Gone](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410) status, the webhook is removed from the portal.

If a request fails to return a successful response after 5 retry attempts, and more than three days have passed since the last successful request, the webhook is disabled.

## Webhook response

There are no restrictions on the response body, except for the database limit on the *text* size. The response does not need to be signed and must contain any successful status.

## Webhook queue

Each webhook is added to a queue and then sequentially retrieved. However, webhooks are sent in parallel, which means they may not appear in the same order as the events are simulated.

The pending webhooks in the queue are checked every 5 seconds, and up to 10 threads are initiated to send unprocessed webhooks.

## Testing webhooks

To test the operation of webhooks, you can use third-party services. For example, you can obtain a unique URL from the [Webhook.site](https://webhook.site/) service and specify it in the **Payload URL** field when creating a webhook. When the trigger is executed on the portal, a request will be sent to the specified address, and the information from the request will be displayed in the site interface.
