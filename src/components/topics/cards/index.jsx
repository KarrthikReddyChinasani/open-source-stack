import React from 'react';

export default class TopicCards extends React.Component {
	render() {
		var background = {
			backgroundImage: 'url(https://localhost:3401/images/' + this.props.topic.title + '.png)',
		}
		return (
			<li className="cards__item" key={this.props.topic._id}>
				<div className="card">
					<div className="card__image" style={background}/>
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