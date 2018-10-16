# Jaki środek transportu?

Powered by AKAI

### Prerequisites

Make sure you have parcel installed

```
npm install -g parcel-bundler
```

### Installing

Clone this repo with

```
git clone https://github.com/akai-org/jaki-srodek-transportu.git
```

Go to project directory

```
cd jaki-srodek-transportu
```


Install all packages

```
npm install
```

Start development server

```
npm start
```

## Deployment

Project is deployed automatically with each commit to master
You can access the website at https://jakisrodektransportu.netlify.com

## Git flow

Each issue has to go through steps below:
1. Create a separate brach from master and call it following this pattern 00-issue name (for instance for issue #3 name of the branch should be: 03-search-results-component)
2. Code, checking if all criteria from the issue are met. 
3. Test locally.
4. Create a pull request from your branch to master.
5. Wait for at least one approval (either from @tomaszgil or @pietersweter)
6. Merge pull request and test your feature on netlify instance.
