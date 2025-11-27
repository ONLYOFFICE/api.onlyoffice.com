import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate a payment page URL

This example demonstrates how to send a payment request for a portal and retrieve the payment page URL (or checkout setup URL) in ONLYOFFICE DocSpace. You can use this flow in a custom billing dashboard to redirect the portal administrator to the correct payment or setup page.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1 (optional): Send a payment request
  async function sendPaymentRequest(userName, email, message) {
    const url = `${BASE_URL}/api/2.0/portal/payment/request`;
    const body = {
      userName,
      email,
      message,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Payment request sent successfully.');
      console.log('Server response:', result);
      return true;
    }

    const text = await res.text();
    console.log('Failed to send payment request:', res.status, text);
    return false;
  }

  // Step 2: Get the payment page URL
  async function getPaymentPageUrl(backUrl, quantity = null) {
    const url = `${BASE_URL}/api/2.0/portal/payment/url`;

    const body = { backUrl };
    if (quantity != null) {
      body.quantity = quantity;
    }

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const paymentUrl = json.response || json;
      console.log('Payment page URL received:', paymentUrl);
      return paymentUrl;
    }

    const text = await res.text();
    console.log('Failed to get payment page URL:', res.status, text);
    return null;
  }

  // Step 3 (optional): Get the checkout setup page URL
  async function getCheckoutSetupUrl(backUrl) {
    const url = new URL(`${BASE_URL}/api/2.0/portal/payment/chechoutsetupurl`);
    url.search = new URLSearchParams({ BackUrl: backUrl }).toString();

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const setupUrl = json.response || json;
      console.log('Checkout setup URL received:', setupUrl);
      return setupUrl;
    }

    const text = await res.text();
    console.log('Failed to get checkout setup URL:', res.status, text);
    return null;
  }

  // Helper: simulate redirect from your backend
  function redirectToUrl(url) {
    if (!url) {
      console.log('No URL provided for redirect.');
      return;
    }

    console.log('\n=== Redirect the admin to this URL ===');
    console.log(url);
  }

  // Example usage
  (async () => {
    const billingUserName = 'Billing Admin';
    const billingEmail = 'billing@example.com';
    const billingMessage =
      'Please complete the payment for the selected DocSpace quota.';

    // URL where the admin will be redirected after payment or setup
    const backUrl = 'https://your-portal.example.com/billing/return';

    // Optional quantity mapping (for example, product IDs and their quantities)
    const quantity = {
      '1001': 1, // Example item identifier
    };

    // Step 1 (optional): Send a payment request
    const sent = await sendPaymentRequest(
      billingUserName,
      billingEmail,
      billingMessage
    );

    if (sent) {
      // Step 2: Get the URL to the payment page
      const paymentUrl = await getPaymentPageUrl(backUrl, quantity);

      // Step 3 (optional): Get the checkout setup URL, if needed
      const checkoutSetupUrl = await getCheckoutSetupUrl(backUrl);

      // Prefer the payment page; fall back to checkout setup if needed
      const targetUrl = paymentUrl || checkoutSetupUrl;
      redirectToUrl(targetUrl);
    }
  })();
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

  # Step 1 (optional): Send a payment request
  def send_payment_request(user_name, email, message):
    url = f"{BASE_URL}/api/2.0/portal/payment/request"
    data = {
      "userName": user_name,
      "email": email,
      "message": message,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Payment request sent successfully.")
      print("Server response:", result)
      return True

    print("Failed to send payment request:", response.status_code, response.text)
    return False

  # Step 2: Get the payment page URL
  def get_payment_page_url(back_url, quantity=None):
    url = f"{BASE_URL}/api/2.0/portal/payment/url"

    data = {
      "backUrl": back_url,
    }
    if quantity is not None:
      data["quantity"] = quantity

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      payment_url = payload.get("response", payload)
      print("Payment page URL received:", payment_url)
      return payment_url

    print("Failed to get payment page URL:", response.status_code, response.text)
    return None

  # Step 3 (optional): Get the checkout setup page URL
  def get_checkout_setup_url(back_url):
    url = f"{BASE_URL}/api/2.0/portal/payment/chechoutsetupurl"
    params = {
      "BackUrl": back_url,
    }

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      payload = response.json()
      setup_url = payload.get("response", payload)
      print("Checkout setup URL received:", setup_url)
      return setup_url

    print("Failed to get checkout setup URL:", response.status_code, response.text)
    return None

  # Helper: simulate redirect from your backend
  def redirect_to_url(url):
    if not url:
      print("No URL provided for redirect.")
      return

    print("\n=== Redirect the admin to this URL ===")
    print(url)

  if __name__ == "__main__":
    billing_user_name = "Billing Admin"
    billing_email = "billing@example.com"
    billing_message = "Please complete the payment for the selected DocSpace quota."

    # URL where the admin will be redirected after payment or setup
    back_url = "https://your-portal.example.com/billing/return"

    # Optional quantity mapping (for example, product IDs and their quantities)
    quantity = {
      "1001": 1,  # Example item identifier
    }

    # Step 1 (optional): Send a payment request
    if send_payment_request(billing_user_name, billing_email, billing_message):
      # Step 2: Get the URL to the payment page
      payment_url = get_payment_page_url(back_url, quantity=quantity)

      # Step 3 (optional): Get the checkout setup URL, if needed
      checkout_setup_url = get_checkout_setup_url(back_url)

      # Prefer the payment page; fall back to checkout setup if needed
      target_url = payment_url or checkout_setup_url
      redirect_to_url(target_url)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Send a payment request

A POST request is sent to [/api/2.0/portal/payment/request](/docspace/api-backend/usage-api/send-payment-request) to send a payment or sales request for the portal.

Request body:

- `userName`: name of the user submitting the request (up to 255 characters).
- `email`: contact email address (up to 64 characters).
- `message`: details of the payment request (up to 255 characters).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function sendPaymentRequest(userName, email, message) {
    const url = `${BASE_URL}/api/2.0/portal/payment/request`;
    const body = {
      userName,
      email,
      message,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Payment request sent successfully.');
      console.log('Server response:', result);
      return true;
    }

    const text = await res.text();
    console.log('Failed to send payment request:', res.status, text);
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_payment_request(user_name, email, message):
    url = f"{BASE_URL}/api/2.0/portal/payment/request"
    data = {
      "userName": user_name,
      "email": email,
      "message": message,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Payment request sent successfully.")
      print("Server response:", result)
      return True

    print("Failed to send payment request:", response.status_code, response.text)
    return False
  ```

  </TabItem>
</Tabs>

## Step 2: Get the payment page URL

A PUT request is sent to [/api/2.0/portal/payment/url](/docspace/api-backend/usage-api/get-payment-url) to get the URL of the payment page.

Request body:

- `backUrl`: URL where the user will be redirected after payment processing.
- `quantity`: mapping of item identifiers to their quantities in the payment.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getPaymentPageUrl(backUrl, quantity = null) {
    const url = `${BASE_URL}/api/2.0/portal/payment/url`;

    const body = { backUrl };
    if (quantity != null) {
      body.quantity = quantity;
    }

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const paymentUrl = json.response || json;
      console.log('Payment page URL received:', paymentUrl);
      return paymentUrl;
    }

    const text = await res.text();
    console.log('Failed to get payment page URL:', res.status, text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_payment_page_url(back_url, quantity=None):
    url = f"{BASE_URL}/api/2.0/portal/payment/url"

    data = {
      "backUrl": back_url,
    }
    if quantity is not None:
      data["quantity"] = quantity

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      payment_url = payload.get("response", payload)
      print("Payment page URL received:", payment_url)
      return payment_url

    print("Failed to get payment page URL:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Get the checkout setup URL

A GET request is sent to [/api/2.0/portal/payment/chechoutsetupurl](/docspace/api-backend/usage-api/get-checkout-setup-url) to retrieve the URL of the checkout setup page.

Query parameters:

- `BackUrl`: URL where the user will be redirected after completing the setup.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getCheckoutSetupUrl(backUrl) {
    const url = new URL(`${BASE_URL}/api/2.0/portal/payment/chechoutsetupurl`);
    url.search = new URLSearchParams({ BackUrl: backUrl }).toString();

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const setupUrl = json.response || json;
      console.log('Checkout setup URL received:', setupUrl);
      return setupUrl;
    }

    const text = await res.text();
    console.log('Failed to get checkout setup URL:', res.status, text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_checkout_setup_url(back_url):
    url = f"{BASE_URL}/api/2.0/portal/payment/chechoutsetupurl"
    params = {
      "BackUrl": back_url,
    }

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      payload = response.json()
      setup_url = payload.get("response", payload)
      print("Checkout setup URL received:", setup_url)
      return setup_url

    print("Failed to get checkout setup URL:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>