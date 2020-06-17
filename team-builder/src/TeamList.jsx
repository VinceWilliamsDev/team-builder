import React from 'react'
import MemberCard from './MemberCard'


function TeamList(props) {
    const { team } = props

    return (
        <div>
            {team.map(member => {
                return (
                    <MemberCard key={member.id} member={member}/>
                )
            })}
        </div>
    )
}


export default TeamList