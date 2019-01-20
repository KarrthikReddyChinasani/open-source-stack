import React from 'react';
import TopicCards from '../cards';

export default class TopicsRow extends React.Component {
	render() {
		return (
			<div key={this.props.topicsrow.letter}>
				<div className="LetterHeader">
					{this.props.topicsrow.letter}
				</div>
				<div className="cards">
					{!(this.props.topicsrow.length == 0)
						? this.props.topicsrow.values.map(function(topic) {
							return (
								<TopicCards topic={topic}  key={topic._id}/>
							);
						})
						: ''}
				</div>
			</div>
		); 
	}
}