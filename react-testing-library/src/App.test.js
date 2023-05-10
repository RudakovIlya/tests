import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App/>);
  const appTitle = screen.getByText(/hello world/i); // Флаг i означает, что вне зависимости от регистра
  expect(appTitle).toBeInTheDocument(); // toBeInTheDocument проверяет существование ли на странице подобный заголовок.
  const btn = screen.getByRole('button') // ищем элемент по его роли
  expect(btn).toBeInTheDocument();
  const input = screen.getByPlaceholderText('search') // ищем input по его placeholder
  expect(input).toBeInTheDocument();
});
