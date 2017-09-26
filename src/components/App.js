import React from 'react';
import PropTypes from 'prop-types';
import {
  gql,
  graphql,
} from 'react-apollo';


function Todos({ data: { fetchTodos } }) {

  function renderTodos(todos) {
    if (!todos) { return null; }

    return todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
      </li>
    ));
  }

  return (
    <ul>
      {renderTodos(fetchTodos)}
    </ul>
  );
};

Todos.propTypes = {
  data: PropTypes.shape({
    fetchTodos: PropTypes.shape({
      complete: PropTypes.boolean,
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  }),
};

export default graphql(gql`
  query {
    fetchTodos {
      complete
      id
      text
    }
  }
`)(Todos);
