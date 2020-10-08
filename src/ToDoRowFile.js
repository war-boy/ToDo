import React, { Component } from 'react';

export class ToDoRow extends Component {
    //oneMappedItem below is the mapping of my filtered todoItems array.
    //The filter is for items that are either "done" (true) or "not done" (false)
    render = () =>
    <tr>
        <td>
            {this.props.oneMappedItem.action} 
        </td>
        <td>
            <input 
            type="checkbox" 
            checked = {this.props.oneMappedItem.done} //if false, it won't be checked and vice versa
            onChange = {() => this.props.callback(this.props.oneMappedItem)} //oneMappedItem (the todoItem) when changed, gets passed back into the call back
            />
        </td>
    </tr>
}