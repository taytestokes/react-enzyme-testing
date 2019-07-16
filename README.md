# React Testing With Enzyme

Enzyme is a testing utility package developed by AirBnB that makes testing React components easier.

Enzyme is not included in Create React App so we will need to install it ourselves.

## Setup

In the root level of your project, run the terminal command:

```bash
$ npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

In the `src` folder we will need to create a file to setup our Enzyme utilities and configuration. Create a file called `setupTests.js`. This file needs to exist and be present so React knows to use Enzyme as a testing utility.

Inside of the `setupTests.js` file, enter this code

```javascript
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
```