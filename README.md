

# CS51


## Requirements

- `Homebrew` ([website](https://brew.sh/))
- `Node.js` ([website](https://nodejs.org/en/download/))
- `npm` package manager for Javascript (bundled with the Node.js installer above)


## Installation

```
git clone https://github.com/bronsduran/CS51.git
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
npm install
```
## Run the application

```
npm start 
```

Navigate to [localhost:8080](http://localhost:8080) and you should see the app!

npm may complain that some package is not installed. If that happens, just npm install that package and run yarn install again. 

## Deploy

1) Update the router and resources to use the AFS path instead of your local path. Look in /src/index.js to see how this is done for the router, and look in /index.html to see how this is done for the resources. 

2) Once you've set the correct paths you can generate the production build by running: 
```
webpack build -p 
```
This complies all the site's dependencies into one file and emits a bundle.js. 

3) Test that your changes work on AFS by uploading them your personal WWW AFS folder. You'll be uploading 4 files: index.html, bundle.js, style.css, and course-info.png.

4) Once you've verified that your changes work, you can upload them to the WWW directory in the CS51 domain. The web AFS interface is the easiest way to do that. 

