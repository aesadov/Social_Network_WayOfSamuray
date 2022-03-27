import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}


class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editeMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div>
                {!this.state.editeMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status || '------'}</span>
                    </div>
                }
                {this.state.editeMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditeMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;