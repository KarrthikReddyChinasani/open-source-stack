import React from 'react';

export default class AlphabetHeading extends React.Component {
	constructor() {
		super();
	}
	render() {
		var selected = {
			fontWeight: 800
		};
		var selectedLetter = this.props.selected;
		return (
			<div className="letter-item" style={[selectedLetter == this.props.letter ? selected :  '']} onClick={this.props.onClick}>
				{this.props.letter}
			</div>);
	}
}