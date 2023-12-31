# Conway's Game of Life

Conway's game of life, devised by British Mathematician John Conway, has three rules: 
- Any live cell with two or three live neighbours survives
- Any dead cell with three live neighbours becomes a live cell
- All other live cells die in the next generation, and, similarly, all other dead cells stay dead

From a starting configuration of active and inactive cells, the game will evolve based off these initial rules. Users of this implementation of conway's game of life will be able to determine the starting configuration and augment future successive configurations by halting the game and touching the cell they would like to make active or inactive. Built with `create-react-app`.

Future improvements:
- Adding choice for n-dimensional grid
- Adding choice for n-millisecond transitions
- Adding bespoke configurations including beacon, pulsar, and penta-decathlon 

To run repo: 
- Access [Github Pages ](https://annebrandes.github.io/game-of-life/)
- Download and run `npm start`
