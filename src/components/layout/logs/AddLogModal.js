import React, {useState} from 'react'

 const AddLogModal = () => {

    const [message, setMessage] = useState('');
    const [attencion, setAttencion] = useState('false');
    const [tech, setTech] = useState('');

    const onsubmit = () => {
        console.log(message, tech, attencion);
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} id="" onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className ='browser-default' onChange= { e => setTech(e.target.value)}>
                            <option value="" disabled> Select Techician</option>
                            <option value="Jonh Doe" > Jonh Doe</option>
                            <option value="Jonh" > Jonh </option>
                            <option value="J" > J</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked = {attencion} value={attencion} onChange= {
                                    e => setAttencion(!attencion)
                                } />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick= {onsubmit} className="modal-close waves-effect waves-green btn-flat" >Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width :'75%' ,
    height: '75%'
}

export default AddLogModal