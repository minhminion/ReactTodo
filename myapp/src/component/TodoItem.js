import React,{ Component } from 'react'
import 'antd/dist/antd.css';
import { Button } from 'antd'
import { Checkbox } from 'antd';
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops';

class TodoItem extends Component {
    getStyle = () =>{
        return {
            background: '#f4f4f4',
            borderRadius: '5px',
            marginTop: '10px',
            padding: '10px',
            borderBottom: '1.5px #000 solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    getButtonStyle = () =>{
        return {
            float: 'right',
        }
    }

    render(){
        const { id , title } = this.props.todo;
        return (
        <Spring 
            from={{ opacity: 0 , marginLeft : -500 }}
            to={{ opacity: 1 , marginLeft: 0}}
            config= {{ friction: 40 }}
        >
            {props => (
            <div style={props}>
                <div style={this.getStyle()}>
                    <p> 
                        <Checkbox onChange={this.props.markComplete.bind(this, id)}/> {"  "}
                        { title }
                        <Button style={this.getButtonStyle()} type="danger" shape="circle" icon="delete" onClick={this.props.delTodo.bind(this, id)}/>
                    </p>
                </div>
            </div>
        )}
        </Spring>
        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodoItem
