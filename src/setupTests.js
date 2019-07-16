// import enzyme and the enzyme react adapter
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// invoke the built in enzyme method configure to setup the new adapter
Enzyme.configure({adapter: new Adapter()});