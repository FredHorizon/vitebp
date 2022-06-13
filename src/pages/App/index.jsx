import { Container } from './styles';
import P from 'prop-types';

function App({ children }) {
  return (
    <Container>
      <div>
        <h1>{children}</h1>
      </div>
    </Container>
  );
}

export default App;

App.propTypes = {
  children: P.node.isRequired,
};
