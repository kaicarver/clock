## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The actual command was:

```bash
npx create-react-app clock --template typescript 
```

It took an extra nice long time, and now... TypeScript! Woo-hoo!

Annnd... I'm almost immediately at my first TypeScript error.

### Hello TypeScript

Here's my first error, after copying some Perfectly Fine code from another React project:

```javascript
Failed to compile.

/home/kai/clock/src/App.tsx
TypeScript error in /home/kai/clock/src/App.tsx(32,24):
Parameter 'props' implicitly has an 'any' type.  TS7006

    30 | }
    31 |
  > 32 | function FormattedDate(props) {
```

Okaaay...

So I decided to see if there's an easy way to transition to TS from JS. I landed here:

https://programmingwithmosh.com/javascript/react-typescript/

Let's see if it helps.

Yup:

> Now things become a bit more difficult when you want to implement your first class component (React Container). You will probably get compiler errors because of not declared types definitions of props and state.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
