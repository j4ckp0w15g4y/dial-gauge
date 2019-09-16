import React, { Component } from 'react';

class SubmitForm extends Component {
    render() {
        return (
            <div className="">
                <form>
                    <select type="text"
                        onChange={this.props.submitFunc}
                    // value={this.props.}
                    >
                        <option value=''>Select Row</option>
                        <option value="rowOne">Row One</option>
                        <option value="rowTwo">Row Two</option>
                        <option value="rowThree">Row Three</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default SubmitForm