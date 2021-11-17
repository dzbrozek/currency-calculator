# currency-calculator

Kalkulator walut (wszystkie z tabeli C, z API NBP, http://api.nbp.pl/#kursyWalut, możliwość sprawdzania danych dla ostatniego dnia miesiąca w przeciągu roku oraz dzisiaj)

* 2 podstrony (na dowolnym routerze):
    * home page z konwerterem, możliwość wyboru walut
    * about page, może być wypełniona "Lorem ipsum"
* wykorzystanie jednego z frameworków do UI (np. MaterialUI)
    * ale też zmiana podstawowych kolorów theme na kolory Milo (#FAA83B, #DD6526)
* napisanie z wykorzystaniem TypeScript

## Development

1. Install [yarn](https://classic.yarnpkg.com/en/docs/getting-started)
2. Install project dependencies

```
yarn
```

3. Runs the app in the development mode 

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Deployment

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
