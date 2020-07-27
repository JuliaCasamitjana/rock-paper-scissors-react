import React from 'react';
import Modal from 'react-modal';



const RulesModal = (props) =>(
	<Modal
	isOpen = {!!props.showRules}
	ariaHideApp={false}
	onRequestClose={props.showRulesClear}
    contentLabel = "Selected Option"
    closeTimeoutMS={200}
	className="modal"
	>

	<h3 className="modal__title">RULES</h3>
    <img className="modal__img" alt="Rules" src={require('../images/image-rules.svg')}/>
	<button className="modal__btn" onClick = {props.showRulesClear}>x</button>
	</Modal>

);


export default RulesModal;
