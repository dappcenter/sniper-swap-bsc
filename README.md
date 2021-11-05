## Server Requirements

We recommend Digital Ocean servers, Open account and get $100 credits click here : https://bit.ly/30HxxIf

* login your digital ocean account and create new Droplet, from "Choose an image" click "Marketplace" and select "Node JS on Ubuntu 20.04" 
* Fill the other fields and click "Create Droplet"

## Installation

We can install it for you for only $50 , if you like click here : https://bit.ly/3jRHIAK

To install by yourself :
* Click your Droplet
* Click "Access" and from access page click the button "Launch Droplet Console"
* from your console excute the following commands

sudo ufw enable

sudo ufw allow 5000

sudo ufw status

sudo apt-get update 

sudo apt-get install yarn

npm install -g serve

npm install -g pm2

cd ../var/www/html

git clone https://github.com/SniperProject/toolkit.git

cd toolkit

yarn install

cd ../

git clone https://github.com/SniperProject/sdk.git

cd sdk

yarn install

cd ../

git clone https://github.com/SniperProject/sniper-swap-bsc.git

cd sniper-swap-bsc

yarn install

yarn build

pm2 serve build 5000 --spa



That is all 

Live Sample : http://sniperswap.com