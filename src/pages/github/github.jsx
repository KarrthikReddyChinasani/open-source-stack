import React from 'react';

export default class GithubPage extends React.Component {
	constructor(props) {
		super(props);
		console.log('khushi', this.props.match.params.code);
	}
    
	render() {
		return(
			<div>
                
			</div>
		);
	}
}