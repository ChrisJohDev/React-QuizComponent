import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';


class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((row, indx) =>
                            <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={row} key={indx} />
                        )}
                    </ul>

                </section>
            </main>
        );
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }
}

export default QuizQuestion;