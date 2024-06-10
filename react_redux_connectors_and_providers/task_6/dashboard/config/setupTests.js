// import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import util from 'util';
import { StyleSheetTestUtils } from 'aphrodite';

configure({ adapter: new Adapter() });
Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});

// Supprimer l'injection de style pendant les tests
StyleSheetTestUtils.suppressStyleInjection();
