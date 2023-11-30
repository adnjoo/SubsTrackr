## SubsTrackr
SubsTrackr is a powerful subscription tracking web application available at [substrackr.com](https://www.substrackr.com/). Built using the T3 stack, it helps users efficiently manage their subscriptions.

<p align="center">
  <a href="https://substrackr.com">
    <img src='https://raw.githubusercontent.com/adnjoo/SubsTrackr/main/web/public/screenshot.png' width='600' />
  </a>
</p>

### Quick Start
To get started locally, follow these steps:

1. Clone this repository with `git clone https://github.com/adnjoo/SubsTrackr/`

2. Fill in the `.env` using the `.env.example` file as a guide.

where: 
- `DATABASE_URL` is your postgres connection string (from e.g. recommend Supabase)
- `NEXT_AUTH_SECRET` is your JWT secret
- `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` are your Discord credentials for the OAuth flow, which can be obtained at [discord.com/developers](https://discord.com/developers/applications)

3. Run the following script to start up
```bash
npm run dev
```

This command will `cd` into the `web` directory and start the development server and allow you to access SubsTrackr locally.


### Features
- Subscription Management: Track and manage all your subscriptions in one place.
- User-Friendly Interface: Intuitive design for a seamless user experience.
- T3 Stack: Utilizes the power of T3 stack for robust functionality and performance.

### Contributing
We welcome contributions! If you'd like to contribute to SubsTrackr, please check out our Contribution Guidelines for more details.

### Feedback
We value your feedback! If you have any suggestions, feature requests, or issues, feel free to open an issue or reach out to us directly.

### License

This project is licensed under the MIT License - see the `LICENSE.txt` file for more information.
