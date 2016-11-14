import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Restaurantes from '@collections/restaurantes'

Meteor.publish('restaurantes', () => {
  return Restaurantes.find()
})


Meteor.publish('restaurantes.single', ({ restauranteId }) => {
  check(restauranteId, String)
  return Restaurantes.find({
    _id: restauranteId,
  })
})
