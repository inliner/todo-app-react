import React, { Component } from 'react';
import {connect}  from 'react-redux';
import actions from '../actions/actions';

class AddTodo extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const dispatch = this.props.dispatch;
        const todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    };

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);