import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dashboard from './Dashboard';

describe('containers/<Dashboard />', () => {
  it('should render the page correctly', async () => {
    const { baseElement, asFragment } = render(<Dashboard />);
    expect(baseElement).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
