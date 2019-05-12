# RecruitBot
A Discord bot intended to handle recruiting requests

# Usage:
For this example, we have two channels. Channel A is where users send recruiting requests and @ the bot, Channel B is where the bot will repost the request. <br>

* User types a message and includes @(BotName) anywhere in the message.<br>
* User sends the message in Channel A.<br>
* The Bot takes the message and then embeds the message in Channel B <br>

# Setup:
* Rename 'example-config.json' to 'example.json'
* Paste the Channel ID to the channel where the bot will read requests under 'inputChannelID'
* Paste the Chennel ID to the channel where the bot will embed the request under 'outputChannelID'
