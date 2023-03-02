import React from "react";

export function AllTasks(props) {
    return (
        <ul>
          {props.allTasks.map(({ title, description, id }) => (
            <li key={id}>
              <div>
                <h2>{title}</h2>
                <button onClick={() => props.handleDelete(id)}>X</button>
              </div>
              {!description ? null : <p>{description}</p>}
            </li>
          ))}
        </ul>
      );
    }
