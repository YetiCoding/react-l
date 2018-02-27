import * as React from 'react';
import { Form } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
const FormItem = Form.Item;

export class AddTodo extends React.Component<{ form: WrappedFormUtils }, any> {
    handleSubmit = () => {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem>

                    </FormItem>
                </Form>
            </div>
        );
    }
}
Form.create()(AddTodo)
