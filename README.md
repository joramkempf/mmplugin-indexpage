# A plugin for Dragory's ModMail that adds Monitoring Support
This is a simple plugin that extends the inbuilt webserver with an index-page.
With this, you can customize your bot and add monitoring to your bot using e.g. [Uptime-Kuma](https://github.com/louislam/uptime-kuma)

## Installation
- Clone this repository in a subdirectory of the bot's folder. e.g. `plugins`
- Add the following line to your config-file

    `plugins[] = ./plugins/IndexPage/index.js`
- Restart the bot