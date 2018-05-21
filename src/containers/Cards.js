import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'

const Cards = () => {
  return (
    <div>

      this.props.list.map(card => {
        return (
        <Card key={card.id} card={card}>
      )
      })
    </div>
  )
}

const mapStateToProps = ({ list }) => ({ list })

export default connect(mapStateToProps)(Cards)