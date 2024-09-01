import React from 'react'
import Container from '../common/Container'
import career_data from '../../tmp/career'
import CareerItem from '../item/CareerItem'
import { motion } from 'framer-motion'

const Career = () => {
  return (
    <Container scrollName="career" title="career">
      <motion.div
        whileInView={{ x: 0, y: 15, scale: 1, rotate: 0, opacity: 1 }}
        initial={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="space-y-6"
      >
        {career_data.map((item, index) => {
          return <CareerItem item={item} key={`career_${index}`} />
        })}
      </motion.div>
    </Container>
  )
}

export default Career
