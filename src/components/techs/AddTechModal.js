import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

 const AddTechModal = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onsubmit = () => {
        if(firstName === '' || lastName === '')
            M.toast({ html : 'Please enter a firstName and LastName'});
        else{
            setLastName('');
            setFirstName('');
        }
    }
    
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName}  onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active">firstName</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName}  onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active">lastName</label>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick= {onsubmit} className="modal-close waves-effect blue waves-light btn" >Enter</a>
            </div>
        </div>
    )
}


export default AddTechModal