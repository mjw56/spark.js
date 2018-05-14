import { render } from 'inferno';
import { BrowserRouter } from 'inferno-router';
import After from '../../../after';
import { ensureReady } from '../../../ensureReady';
import './client.css';
import routes from './routes';

ensureReady(routes).then(data =>
  render(
    <BrowserRouter>
      <After data={data} routes={routes} />
    </BrowserRouter>,
    document.getElementById('root')
  ));

if (module.hot) {
  module.hot.accept();
}
