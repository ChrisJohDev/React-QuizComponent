import React, { Component } from 'react';


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
                            <li key={indx}>{row}</li>)}
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;