This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

# This website is my personal CV's exposé

This project is on active development. If you want general documentation for angular, or for how to set up an angular instance you can click [here](https://github.com/miler2/documentation/blob/main/angular.md).


## Useful commands for this project
This command serves the website locally for all the devices in the local network
```
ng serve --host 0.0.0.0
```

This command builds the website into a single folder so that github can load the website with javascript files.
```
ng b
```

This version of the command sets the default routing for the website. This specific project does not have a custom url, so the command will look like this:

```
ng b --base-href="https://miler2.github.io/my_portfolio-1/"
```

## angular-cli-ghpages
This is so that I can directly upload my compiled code from the dist/browser folder into the gh-pages branch of my repo and automatically build the page in github.

To set this up we first need to **install angular-cli-ghpages** to angular:

```
ng add angular-cli-ghpages
```

This command uploads to my github branch the files with the website and automatically launches the github action to publish the website.

```
npx angular-cli-ghpages --dir=dist --cname=miler2.com
```

The ```--cname``` tag is added when the url is custom, otherwise you don't have to add the tag.
