## Setup Wix Studio headless

Implement the backend with wix Studio for e-commerce is fast and ready to use well stracture Schemas. To set up go to [Go-Headless](https://dev.wix.com/docs/go-headless) follow the [setup](https://dev.wix.com/docs/go-headless/getting-started/setup/general-setup/create-a-project) on the side menu.

Steps to fetch Data

- To fetch data from the wix follow [javaScript-SDK](https://dev.wix.com/docs/go-headless/coding/java-script-sdk/visitors-and-members/create-a-client-with-oauth)

```bash
npm install @wix/sdk
npm install @wix/stores
```

- create context for wixContext sothat we can wrap every part of our app with it

  ```bash
    const myWixClient = createClient({
    modules: {
      products,
      services
    },
    auth: OAuthStrategy({
      clientId: '<YOUR_CLIENT_ID>',
      tokens: {
        accessToken: {
          value: '<ACCESS_TOKEN_VALUE>',
          expiresAt: <ACCESS_TOKEN_EXPIRY_DATE>

        },
        refreshToken: {
          value: '<REFRESH_TOKEN_VALUE>'
        }
      }
    })
  })
  ```

- head over to [setting](https://manage.wix.com/dashboard/<Your-Dashboard-ID>/settings?referralInfo=sidebar) then go to `headless-settings` click the `Create OAuth App` then fetch your `clientId` there.

- `npm install js-cookie` and `npm i isomorphic-dompurify`
- To implement the [WIX-SDK](https://dev.wix.com/docs/sdk/backend-modules/stores/products/introduction)

- Authentication in wixHeadless can be done in [setting](https://manage.wix.com/dashboard/<Your-Dashboard-ID>/oauth-apps-settings) click 3 points followed the `setting` then which you fill the `Allowed direct domain and Allowed authorization redirect URIs`
- continoue to [JavaScript-SDK](https://dev.wix.com/docs/go-headless/coding/java-script-sdk/visitors-and-members/handle-members-with-custom-login)
