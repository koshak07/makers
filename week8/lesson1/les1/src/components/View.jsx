import React from "react";
import { NavItem, Table, Button } from "react-bootstrap";

const View = (props) => {

  return (
    <div className="container">
      {props.todos.length ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {props.todos.map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>{i.title}</td>
                <td>
                  <Button onClick={()=> props.deleteTask(i.id)}>Del</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h2>Пока нет тасков</h2>
      )}
    </div>
  );
};

export default View;
