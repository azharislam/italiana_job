# Deployments while in development

While we are in dev mode, we are going to use [now](https://zeit.co/now) .

In order to be able to deploy to now, you will first need to create an account on
their site. You just need an email address and, of course, you'll get an email to confirm it.
Go ahead, it's free for open-source projects. I'll wait.

Done? Ok. The next thing is to install the CLI with:

    npm install -g now

Once you are happy with that, go into this project's main folder and just run `now`. It will ask
you again for the email address you used in the previous step and it will send you another
email you will have to confirm, in order to log you in from the CLI.

The CLI tool will wait for you to click on the VERIFY link in the email. Isn't it amazing?

You're almost there, run once more `now` from the project's root folder and the deployment
process starts. 

If all goes well, it will build the project Nand run a webserver and after a few minutes you get 
a unique url where you can visit your website.



