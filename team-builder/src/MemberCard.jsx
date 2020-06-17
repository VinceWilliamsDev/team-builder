import React from 'react'

function MemberCard(props) {
    const { name, email, role } = props.member

    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    )
}

export default MemberCard