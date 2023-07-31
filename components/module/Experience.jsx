import React from 'react'
import Container from '../common/Container'
import experience_data from '../../tmp/experience'
import ExperienceItem from '../item/ExperienceItem'

const Experience = () => {
  return (
    <Container scrollName="experience" title="experience">
      {experience_data.map((item, index) => {
        return <ExperienceItem item={item} key={`experience_${index}`} />
      })}
    </Container>
  )
}

export default Experience
