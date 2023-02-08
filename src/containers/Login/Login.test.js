import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from './Login';

describe('containers/<Dashboard />', () => {
  it('should render the page correctly', async () => {
    const { baseElement, asFragment } = render(<Login />);
    expect(baseElement).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
