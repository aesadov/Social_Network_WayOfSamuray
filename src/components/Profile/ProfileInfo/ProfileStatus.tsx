import React from 'react';

type ProfileStatusPropsType = {
    status: string
}


class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editeMode: false
    }

    activateEditeMode = () => {
        this.setState({
            editeMode: true
        })
    }
    deactivateEditeMode = () => {
        this.setState({
            editeMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editeMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editeMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditeMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;