import React from 'react';

export default class LanguageItem extends React.Component {

	constructor(props) {
		super(props);
	}
    
	render() {
		return (
			<li>
				<div className="container-fluid">
					<div className="row">
						<div className="col col-md-1">
						</div>
						<div className="col col-md-6">
							{this.props.language.name}
						</div>
						<div className="col col-md-5">
						</div>
					</div>
				</div>
			</li>
		); 
	}
}