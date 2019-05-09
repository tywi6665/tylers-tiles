import React, { Component } from "react";
import "./Tile.scss";

class Tile extends Component {

    constructor(props) {
        super(props);
    };

    toggleOn(event) {;
        const target = event.target;
        compare(target);
        function compare(element) {
            if (element.getAttribute("data-toggle") === "down") {
                lookingDown(element)
            } else if (element.getAttribute("data-toggle") !== "toggle") {
                lookingUp(element);
            } else {
                element.classList.toggle("toggle")
            }
        };

        function lookingUp(element) {
            compare(element.parentElement)
        }

        function lookingDown(element) {
            compare(element.children[0])
        }
    };

    render() {
        return (
            <div className={`tile tile${this.props.className}`} onClick={this.toggleOn.bind(this)} data-toggle="down">
                <div className={`innerTile innerTile${this.props.className}`}
                    data-toggle="toggle">
                    <div className="tileFace frontFace" data-toggle="up">
                        <h3 className={`tileTitle tileTitle${this.props.className}`} data-toggle="up">{this.props.title}</h3>
                        <ul>
                            <li data-toggle="up">{this.props.incorrectAnswers[0]}</li>
                            <li data-toggle="up">{this.props.incorrectAnswers[1]}</li>
                            <li data-toggle="up">{this.props.incorrectAnswers[2]}</li>
                            <li data-toggle="up">{this.props.correctAnswer}</li>
                        </ul>
                    </div>
                    <div className="tileFace backFace" data-toggle="up">
                        <h3 className="answer" data-toggle="up">{this.props.correctAnswer}</h3>
                    </div>
                </div>
            </div>
        );
    };
};

export default Tile;