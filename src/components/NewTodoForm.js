import React, {useState} from "react";
function NewTodoForm(props){

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== ''){ //making sure description and assigned are not empty string before we pass it
            props.addTodo(description, assigned);
            setDescription(''); //set them empty string after we pass them
            setAssigned('');
        }
    }

    // const descriptionChange = (event) => {
    //     console.log('description', event.target.value);
    //     setDescription(event.targate.value);
    // }

    // const assignedChange = (event) => {
    //     console.log('assigned', event.targte.value);
    //     setAssigned(event.targate.value);
    // }
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-lable"> Assigned</label>                       
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        //onChange={assignedChange}
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    ></input>
                </div>
                <div>
                    <label className='form-control'> Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        //onChange={descriptionChange}
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button 
                type='button' 
                className='btn btn-primary'
                onClick={submitTodo}
                >Add Todo</button>
            </form>

        </div>
    )

}export default NewTodoForm;