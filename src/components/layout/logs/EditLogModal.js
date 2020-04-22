import React, {useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect } from 'react-redux';
import PropTypes from 'prop-types'
import { updateLog } from '../../../actions/logActions'


 const EditLogModal = ({current, updateLog}) => {

    const [message, setMessage] = useState('');
    const [attencion, setAttencion] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if(current){
            setMessage(current.message);
            setAttencion(current.attencion);
            setTech(current.tech);
        }
    }, [current]);

    const onsubmit = () => {
        if(message === '' || tech === '')
            M.toast({ html : 'Please enter a message and tech'});
        else{
            const newLog = { 
                id: current.id,
                message,
                attencion,
                tech,
                date: new Date()
            }

            updateLog(newLog);
            M.toast({html: `log updated by ${tech}`});
            
            setMessage('');
            setTech('');
            setAttencion(false);

        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
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
                <a href="#!" onClick= {onsubmit} className="modal-close waves-effect blue waves-light btn" >Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width :'75%' ,
    height: '75%'
}

EditLogModal.propTypes = {
    current: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current: state.log.current,
}) 

export default connect(mapStateToProps, {updateLog})(EditLogModal)