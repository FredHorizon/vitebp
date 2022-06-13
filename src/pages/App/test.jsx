import { screen } from '@testing-library/react';
import App from './index';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  renderTheme(<App>Test</App>);
  expect(screen.getAllByRole('heading', { name: 'Test' })).toMatchSnapshot();
});
