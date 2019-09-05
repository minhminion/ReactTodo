import React,{ Component } from 'react'
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
import { Input , Form , Button , Col} from 'antd';



class AddTodo extends Component {

    state = {
        title: ''
    }

    addTodo = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    onChange = (e) => this.setState({ [e.target.name]:e.target.value });

    render(){
        return (
            <Form layout="inline" onSubmit={this.addTodo} size="large">
                <Input.Group >
                    <Col span={19}>
                        <Input 
                            name="title"
                            type="text"
                            placeholder="Add to do here ...."
                            value={ this.state.title }
                            onChange={this.onChange}
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col span={5}>
                        <Button icon="plus" type="primary" htmlType="submit"> Add </Button>
                    </Col>
                </Input.Group>
            </Form>
        );
    }
}

//PropsType
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
