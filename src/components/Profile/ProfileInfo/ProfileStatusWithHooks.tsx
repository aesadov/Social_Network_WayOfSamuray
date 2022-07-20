import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editeMode, setEditeMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditeMode = () => {
        setEditeMode(true)
    }

    const deactivateEditeMode = () => {
        setEditeMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editeMode &&
                <div>
                    <span onDoubleClick={activateEditeMode}>{status || '------'}</span>
                </div>
            }
            {editeMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditeMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;