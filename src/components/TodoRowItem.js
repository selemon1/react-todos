function TodoRowItem(props){
    // const rowNumber =1;
    // const rowDescription= 'Feed dog';
    // const rowAssigend = 'Eric';
    return(
        <tr onClick={() => props.deleteTodo(props.rowNumber)}/*when we click on the row it delete it*/>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}
export default TodoRowItem