// ============================================================
//  VIBE360 — Location Data Matrix
//  Single source of truth for local SEO location pages.
//  Regenerate pages:  node generate-locations.js
// ============================================================
'use strict';

const locations = [
  {
    name: 'Beaconsfield',
    slug: 'beaconsfield',
    venues: ['Crazy Bear Beaconsfield', 'Hedsor House', 'The Rex Beaconsfield']
  },
  {
    name: 'Gerrards Cross',
    slug: 'gerrards-cross',
    venues: ['The Bull Hotel', 'Gerrards Cross Golf Club', 'Upton Court Barn']
  },
  {
    name: 'Amersham',
    slug: 'amersham',
    venues: ['The Agora Suite', 'The Saracens Head', 'Chalfont House']
  },
  {
    name: 'Marlow',
    slug: 'marlow',
    venues: ['Compleat Angler', 'Marlow Golf Club', 'The Eye & Dint']
  },
  {
    name: 'High Wycombe',
    slug: 'high-wycombe',
    venues: ['The Guildhall', 'South Bucks Conference Centre', 'Hughenden Manor']
  },
  {
    name: 'Chesham',
    slug: 'chesham',
    venues: ['The Elgiva Theatre', 'Chesham Moor Centre', 'The Queens Head']
  },
  {
    name: 'Chalfont St Peter',
    slug: 'chalfont-st-peter',
    venues: ['The Chalfont St Peter Club', 'White Hart', 'East Common']
  },
  {
    name: 'Great Missenden',
    slug: 'great-missenden',
    venues: ['Missenden Abbey', 'Kings Head Missenden', 'The Roald Dahl Museum']
  },
  {
    name: 'Stoke Poges',
    slug: 'stoke-poges',
    venues: ['Stoke Park', 'Stoke Place', 'Stoke Poges Golf Club']
  },
  {
    name: 'Aylesbury',
    slug: 'aylesbury',
    venues: ['Aylesbury Waterside Theatre', 'Hartwell House', 'The Bell Hotel']
  }
];

module.exports = { locations };