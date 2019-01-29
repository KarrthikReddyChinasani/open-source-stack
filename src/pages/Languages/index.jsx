import React from 'react';
import { githubService } from '../../services/github.services';
import AlphabetHeading from '../../components/topics/alphabet';
import LanguagesRow from '../../components/languages/row';
import './styles.scss';

export default class Languages extends React.Component {
	constructor(props) {
		super(props);
		this.state = { languages: [], 
			popular: [], 
			letters: [], 
			selectedLanguages: [],
			letterSelected: '', };
		githubService.getAllLanguages().then(languages => {
			this.setState({
				languages: languages.all,
				popular: languages.popular,
				letters: languages.letters,
				selectedLanguages: languages.all,
				letterSelected: 'All',
			});
		});
	}

	clickSelect (letter){
		if(letter == 'All') {
			this.setState({'selectedLanguages': this.state.languages, 'letterSelected':  'All'});
		} else {
			var selected = this.state.languages.filter(item => {
				return letter === item.letter;
			});
			this.setState({'selectedLanguages': selected, 'letterSelected':  letter});
		}
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
											<AlphabetHeading
												letter={letter}
												selected={that.state.letterSelected}
												onClick={() => that.clickSelect(letter)}
												key={index}
											/>
										);
									})
									: ''}
							</div>
						</div>
						<div>
							{this.state.selectedLanguages.length > 0
								? this.state.selectedLanguages.map(function(language, index) {
									return <LanguagesRow languages={language} key={index}/>;
								})
								: ''}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
