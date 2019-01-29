import React from 'react';
import LanguageItem from '../item';
// import TopicCards from '../cards';

export default class LanguagesRow extends React.Component {
	render() {
		return (
			<div key={this.props.languages.letter}>
				<div className="LetterHeader">
					{this.props.languages.letter}
				</div>
				<div>
					<ul className="language-list">
						{!(this.props.languages.length == 0)
							? this.props.languages.values.map(function(language, index) {
								return (
									<LanguageItem key={index} language={language}/>
								);
							})
							: ''}
					</ul>
				</div>
			</div>
		); 
	}
}