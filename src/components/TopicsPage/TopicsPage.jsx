import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { topicsActions } from '../../actions';
import './styles.scss';
import AlphabetHeading from '../topics/alphabet';
import TopicsRow from '../topics/row';

class TopicsPage extends React.Component {
	constructor(props) {
		super(props);
		this.clickSelect = this.clickSelect.bind(this);
		const { dispatch } = this.props;
		dispatch(topicsActions.topics());
		this.state = {
			topics: {},
			selectedTopics: [],
			letterSelected: '',
			letters: []
		};
	}

	clickSelect (letter){
		if(letter == 'All') {
			this.setState({'selectedTopics': this.state.topics.topicsByName, 'letterSelected':  'All'});
		} else {
			var selected = this.state.topics.topicsByName.filter(item => {
				return letter === item.letter;
			})
			this.setState({'selectedTopics': selected, 'letterSelected':  letter});
		}
	}

	static getDerivedStateFromProps(props, state) {
		if(props.topics.topics !== state.topics) {
			return { topics: props.topics.topics,
				selectedTopics: props.topics.topics.topicsByName,
				letterSelected: 'All',
				letters: props.topics.topics.letters};
		}
		return null;
	}

	render() {
		const that = this;
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col col-md-2" />
					<div className="col col-md-8">
						<div>
							<div className="letter-search">
								{this.state.letters.length > 0
									? this.state.letters.map(function(letter, index) {
										return (
											<AlphabetHeading letter={letter} selected={that.state.letterSelected} onClick={() => that.clickSelect(letter)} key={index}/>
										);
									})
									: ''}
							</div>
						</div>
						<div>
							{this.state.selectedTopics.length > 0
								? this.state.selectedTopics.map(function(topicByAlphabet) {
									return (
										<TopicsRow topicsrow={topicByAlphabet} key={topicByAlphabet.letter}/>
									);
								})
								: ''};
						</div>
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

const connectedTopicsPage = connect(mapStateToProps)(TopicsPage);
export { connectedTopicsPage as TopicsPage };
