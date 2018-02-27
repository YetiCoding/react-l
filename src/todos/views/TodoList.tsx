import * as React from 'react';
import { List } from 'antd';
import { Todo } from '../types';
export interface TodoListProps {
    todoList: Array<Todo>
}

export function TodoList(props: TodoListProps) {
    return (
        <List
            bordered={true}
            dataSource={props.todoList}
            renderItem={(item: any) => (
                <List.Item>
                    {item}
                </List.Item>
            )}
        />
    );
}
