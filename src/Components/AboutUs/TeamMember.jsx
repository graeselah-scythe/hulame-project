import React from 'react'
import './TeamMember.css'

const TeamMember = () => {
  return (
    <div className='team'>
        <section className="teamSection">
            <div className="teamContainer">
                <h2 className="teamTitle">
                Meet Our Team
                </h2>
                <div className="teamGrid">
                <Team
                    name="Ma. Junelyn Grace Medina"
                    role="Front-End Developer"
                />
                <Team
                    name="Raniel Banoson"
                    role="Quality Engineer"
                />
                <Team
                    name="Karla Salem"
                    role="UI/UX Designer"
                />
                <Team
                    name="Bench Kian Grijalvo"
                    role="Back-End Developer"
                />
                </div>
            </div>
        </section>
    </div>
  )
}

const Team = ({ name, role }) => {
    return (
      <div className="teamMember">
        <div className="memberPhoto" aria-label={`Photo of ${name}`} />
        <h3 className="memberName">{name}</h3>
        <p className="memberRole">{role}</p>
      </div>
    );
  };
export default TeamMember