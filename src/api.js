// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI


var forests = [
  {
    name: 'Angeles National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'https://www.fs.usda.gov/angeles'
  },
  {
    name: 'Cleveland National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'https://www.fs.usda.gov/cleveland'
  },
  {
    name: 'Eldorado National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'https://www.fs.usda.gov/eldorado'
  },
  {
    name: 'Inyo National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/inyo'
  },
  {
    name: 'Klamath National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/klamath'
  },
  {
    name: 'Lake Tahoe Basin Management Area',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/ltbmu'
  },
  {
    name: 'Lassen National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/lassen'
  },
  {
    name: 'Los Padres National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/lpnf'
  },
  {
    name: 'Mendocino National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/mendocino'
  },
  {
    name: 'Modoc National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/modoc'
  },
  {
    name: 'Plumas National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/plumas'
  },
  {
    name: 'San Bernardino National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/sbnf'
  },
  {
    name: 'Sequoia National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.fed.us/r5/sequoia'
  },
  {
    name: 'Shasta-Trinity National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/stnf'
  },
  {
    name: 'Sierra National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/sierra'
  },
  {
    name: 'Six Rivers National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/srnf'
  },
  {
    name: 'Stanislaus National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/stanislaus'
  },
  {
    name: 'Tahoe National Forest',
    image: 'image.jpg',
    description: 'A description about the forest',
    usfs: 'http://www.fs.usda.gov/tahoe'
  }
];