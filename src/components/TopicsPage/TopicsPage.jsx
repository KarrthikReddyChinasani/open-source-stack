import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { topicsActions } from '../../actions';
import './styles.scss';

class TopicsPage extends React.Component {
	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		dispatch(topicsActions.topics());
	}

	render() {
		var { topics } = this.props;
		var topicsSegregated = [];
		if (Object.keys(topics).length > 0) {
			topicsSegregated = getLetters(topics);
		}
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col col-md-2" />
					<div className="col col-md-8">
						{topicsSegregated.length > 0
							? topicsSegregated.map(function(topicByAlphabet) {
								return (
									<div key={topicByAlphabet.letter}>
										<div className="LetterHeader">
											{topicByAlphabet.letter}
										</div>
										<div className="cards">
											{!(topicByAlphabet.length == 0)
												? topicByAlphabet.values.map(function(topic) {
													return (
														<li className="cards__item" key={topic._id}>
															<div className="card">
																<div className="card__image card__image--fence" />
																<div className="card__content">
																	<div className="card__title">
																		{topic.title}
																	</div>
																	<p className="card__text">{topic.desc}</p>
																	<button className="btn btn--block card__btn">
																		Button
																	</button>
																</div>
															</div>
														</li>
													);
												})
												: ''}
										</div>
									</div>);
							})
							: ''}
            ;
					</div>
					<div className="col col-md-2" />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { topics } = state;
	return {
		topics
	};
}

function getLetters(items) {
	var letters = [];
	var topicsByName = [];
	items.topics.forEach(function(item) {
		if (letters.indexOf(item.title[0].toUpperCase()) === -1) {
			letters.push(item.title[0].toUpperCase());
		}
	});

	letters.forEach(function(letter) {
		var topic = {};
		topic.letter = letter;
		var topicsbyAlphabet = [];
		items.topics.forEach(function(item) {
			if (item.title[0].toUpperCase() == letter) {
				topicsbyAlphabet.push(item);
			}
		});
		topic.values = topicsbyAlphabet;
		topicsByName.push(topic);
	});

	return topicsByName;
}

const connectedTopicsPage = connect(mapStateToProps)(TopicsPage);
export { connectedTopicsPage as TopicsPage };
