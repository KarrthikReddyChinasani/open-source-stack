import React from 'react';
import { connect } from 'react-redux';

import { topicsActions } from '../../../actions';

export default class TopicCards extends React.Component {

	handleSubmit(id) {
				topicsActions.likeTopic(id, true);
	}

	render() {
		var background = {
			backgroundImage: 'url(https://localhost:3401/images/' + this.props.topic.title + '.png)',
		}
		return (
			<li className="cards__item" key={this.props.topic._id}>
				<div className="card">
					<div className="card__image" style={background}>
						<a onClick={this.handleSubmit.bind(this, this.props.topic._id)}>Like</a>
					</div>
					<div className="card__content">
						<div className="card__title">
							{this.props.topic.title}
						</div>
						<p className="card__text">
							{this.props.topic.desc}
						</p>
						<button className="btn btn--block card__btn">
                                    SEARCH
						</button>
					</div>
				</div>
			</li>
		);
	}
}

function mapStateToProps(state) {
	const { topics } = state;
	return {
		topics
	};
}


const TopicCardsPage = connect(mapStateToProps)(TopicCards);
export { TopicCardsPage as TopicCards };
