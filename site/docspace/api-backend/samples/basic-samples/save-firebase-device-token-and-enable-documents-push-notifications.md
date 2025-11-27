import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Save a Firebase device token and enable Documents push notifications

This example demonstrates how to save a Firebase device token for the Documents application in ONLYOFFICE DocSpace and subscribe this device to push notifications. You can use this flow in a mobile or desktop client to register a device and enable notifications for document events.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`, // use this if API_KEY is a JWT
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Step 1: Save the Firebase device token for Documents
  async function saveDocumentsDeviceToken(
    firebaseDeviceToken: string,
    isSubscribed: boolean,
  ) {
    const url = `${BASE_URL}/api/2.0/settings/push/docregisterdevice`;

    const body = {
      firebaseDeviceToken,
      isSubscribed,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Save device token failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    return json.response ?? json;
  }

  // Step 2: Subscribe the device to Documents push notifications
  async function subscribeDocumentsPush(
    firebaseDeviceToken: string,
    isSubscribed: boolean,
  ) {
    const url = `${BASE_URL}/api/2.0/settings/push/docsubscribe`;

    const body = {
      firebaseDeviceToken,
      isSubscribed,
    };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Subscribe to push failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    return json.response ?? json;
  }

  // Example usage
  (async () => {
    const firebaseDeviceToken = 'YOUR_FIREBASE_DEVICE_TOKEN'; // Replace with a real token

    // Step 1: Save device token
    const registered = await saveDocumentsDeviceToken(
      firebaseDeviceToken,
      true,
    );
    console.log('Registered Firebase device:', registered);

    // Step 2: Ensure subscription to Documents push notifications
    const subscribed = await subscribeDocumentsPush(firebaseDeviceToken, true);
    console.log('Subscription status:', subscribed);
  })().catch((e) => {
    console.error(e);
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # Step 1: Save the Firebase device token for Documents
  def save_documents_device_token(firebase_device_token, is_subscribed=True):
    url = f"{BASE_URL}/api/2.0/settings/push/docregisterdevice"

    data = {
      "firebaseDeviceToken": firebase_device_token,
      "isSubscribed": is_subscribed,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      firebase_user = payload.get("response", payload)
      print("Registered Firebase device:", firebase_user)
      return firebase_user

    print(
        "Failed to save device token:",
        response.status_code,
        response.text,
    )
    return None

  # Step 2: Subscribe the device to Documents push notifications
  def subscribe_documents_push(firebase_device_token, is_subscribed=True):
    url = f"{BASE_URL}/api/2.0/settings/push/docsubscribe"

    data = {
      "firebaseDeviceToken": firebase_device_token,
      "isSubscribed": is_subscribed,
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      firebase_user = payload.get("response", payload)
      print("Subscription status:", firebase_user)
      return firebase_user

    print(
        "Failed to subscribe to push notifications:",
        response.status_code,
        response.text,
    )
    return None

  if __name__ == "__main__":
    firebase_device_token = "YOUR_FIREBASE_DEVICE_TOKEN"  # Replace with a real token

    # Step 1: Save device token
    save_documents_device_token(firebase_device_token, is_subscribed=True)

    # Step 2: Subscribe to push notifications
    subscribe_documents_push(firebase_device_token, is_subscribed=True)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Save the Firebase device token

A POST request is sent to [/api/2.0/settings/push/docregisterdevice](/docspace/api-backend/usage-api/doc-register-pusn-notification-device) to save the Firebase device token for the Documents application.

Request body:

- `firebaseDeviceToken`: the Firebase device token obtained from the client SDK.
- `isSubscribed`: whether the user is currently subscribed to push notifications.

The response returns the Firebase user parameters, including:

- `id`: Firebase user ID.
- `userId`: DocSpace user ID.
- `tenantId`: tenant ID.
- `firebaseDeviceToken`: saved device token.
- `isSubscribed`: current subscription state.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function saveDocumentsDeviceToken(
    firebaseDeviceToken: string,
    isSubscribed: boolean,
  ) {
    const url = `${BASE_URL}/api/2.0/settings/push/docregisterdevice`;

    const body = {
      firebaseDeviceToken,
      isSubscribed,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Save device token failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    return json.response ?? json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def save_documents_device_token(firebase_device_token, is_subscribed=True):
    url = f"{BASE_URL}/api/2.0/settings/push/docregisterdevice"

    data = {
      "firebaseDeviceToken": firebase_device_token,
      "isSubscribed": is_subscribed,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      firebase_user = payload.get("response", payload)
      print("Registered Firebase device:", firebase_user)
      return firebase_user

    print(
        "Failed to save device token:",
        response.status_code,
        response.text,
    )
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Subscribe to Documents push notifications

A PUT request is sent to [/api/2.0/settings/push/docsubscribe](/docspace/api-backend/usage-api/subscribe-documents-push-notification) to subscribe (or update subscription) for Documents push notifications for the given device.

Request body:

- `firebaseDeviceToken`: the same Firebase device token as in Step 1.
- `isSubscribed`: set to true to subscribe to notifications, or false to turn them off for this device.

The response has the same structure as in Step 1 and confirms the current subscription status.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function subscribeDocumentsPush(
    firebaseDeviceToken: string,
    isSubscribed: boolean,
  ) {
    const url = `${BASE_URL}/api/2.0/settings/push/docsubscribe`;

    const body = {
      firebaseDeviceToken,
      isSubscribed,
    };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Subscribe to push failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    return json.response ?? json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def subscribe_documents_push(firebase_device_token, is_subscribed=True):
    url = f"{BASE_URL}/api/2.0/settings/push/docsubscribe"

    data = {
      "firebaseDeviceToken": firebase_device_token,
      "isSubscribed": is_subscribed,
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      firebase_user = payload.get("response", payload)
      print("Subscription status:", firebase_user)
      return firebase_user

    print(
        "Failed to subscribe to push notifications:",
        response.status_code,
        response.text,
    )
    return None
  ```

  </TabItem>
</Tabs>