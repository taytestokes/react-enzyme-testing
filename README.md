# React Testing With Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

Enzyme is unopinionated regarding which test runner or assertion library you use, and should be compatible with all major test runners and assertion libraries out there. In this case, we will be using Jest since it comes right out of the box with Create React App.

If you are unfamiliar with with Jest, check out these resources:
[Jest Documentation](https://jestjs.io/)
[Tayte's Repo for Jest Testing](https://github.com/Tstokes9328/jest-testing)

Enzyme is not included in Create React App so we will need to install it ourselves.

## Setup

We first need to install Enzyme and the Enzyme React Adapter. In the root level of your project, run the terminal command:

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

## Folder Structure Setup

Since we will be using Jest to help assist our Ezyme tests, there are a few different ways we can go about setting up our file structure following the Jest patterns in order for Jest to pick up on our tests.

### Files end with a suffix of `.test.js` or `.spec.js`

This is a pattern we can follow to create a test file for a specific component and will reside in the same directory as the component file we are testing. The folder structure of the application would look like so:

```javascript
components
+-- Navbar
    +-- Navbar.js
    +-- Navbar.css
    +-- Navbar.test.js
+-- Footer
    +-- Footer.js
    +-- Footer.css
    +-- Footer.test.js
```

### House all test files inside of a `__tests__` folder

This pattern is where we will create a folder named `__tests__` inside the root of the `src` folder and all of the files inside this folder will be read as a test folder. This would make your folder structure to look like the following:

```javascript
src
+-- compomnents
    +-- Navbar
        +-- Navbar.js
        +-- Navbar.css
    +-- Footer
        +-- Footer.js
        +-- Footer.css
+-- __tests__
    +-- Navbar.js
    +-- Footer.js
```

## Basic Usage

### Shallow Rendering

Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

The Shallow Rendering API *DOES* call upon the components lifecycle methods.

Here is an example of a shallow rendered test:

```javascript
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Foo from './Foo';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.lengthOf(3);
  });

  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
```

The `shallow` is a function that is brought in from the Enzyme package. The function accepts the Node or Component we wish to make a shallow wrapper of and then returns that wrapper.

The shallow wrapper that gets returned from `shallow` has a long list of it's own built in methods coming from the `ShallowWrapper API`

You can find a detailed list of each method [here](https://airbnb.io/enzyme/docs/api/shallow.html)

