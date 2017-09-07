const chai = require('chai');

const Bomber = require('../bomber');
const Cell = require('../cell');
const Wall = require('../wall');
const Enemy = require('../enemy');

describe("bomberman", () => {
    describe("bomberman", () => {
        it("steps into a cell which is empty then it moves in", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var here = new Cell();
            bomber.stepsIn( here );
            chai.assert.equal( bomber.isIn(here), true);

        });

        it("steps into a cell which is busy with an object then it doesn't move and throw an exception", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var here = new Cell( new Wall() );
            chai.assert.throws( () => {
                bomber.stepsIn( here );
            });
            chai.assert.equal( bomber.isIn(bornPlace), true);
        });

        it("steps into a cell which is busy with an enemy then it dies", () => {
          var bornPlace = new Cell();
          var bomber = new Bomber( bornPlace );
          var here = new Cell( new Enemy() );
          bomber.stepsIn( here );
          chai.assert.equal( bomber.isAlive(), false);
          chai.assert.equal( bomber.isDead(), true);
        });

        it("leaves a bomb next to a wall, the bomb explotes and the wall disappears", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var bombedCell = new Cell( new Wall() );
            chai.assert.equal( bombedCell.emptyContent(), false);
            var bomb = bomber.leavesBomb()
            bomb.tick();
            var explotion = bomb.tick();
            explotion.damage(bombedCell);
            chai.assert.equal( bombedCell.emptyContent(), true);
        });

        it("throws a boom to a wall, the boom explotes and the wall disappears", () => {
          var bornPlace = new Cell();
          var bomber = new Bomber( bornPlace );
          var wallCell = new Cell( new Wall() );
          chai.assert.equal( wallCell.emptyContent(), false);
          var trajectory = bomber.throwsBomb(wallCell);
          trajectory.swish();
          var explotion = trajectory.swish();
          explotion.damage(wallCell);
          chai.assert.equal( wallCell.emptyContent(), true);
        });

        it.skip("leaves a bomb with 2 wall around, the bomb explotes and destroy with radious 1", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var wallCell1 = new Cell( new Wall() );
            var wallCell2 = new Cell( new Wall() );
            chai.assert.equal( wallCell1.emptyContent(), false);
            chai.assert.equal( wallCell2.emptyContent(), false);

            var cells = [ wallCell1,
                new Cell(),
                new Cell(),
                new Cell(),
                bornPlace,
                wallCell2,
                new Cell(),
                new Cell(),
                new Cell()
            ]

            var bomb = bomber.leavesBomb()
            bomb.tick();
            var explotion = bomb.tick();

            explotion.damage(cells);
            chai.assert.equal( wallCell1.emptyContent(), true);
            chai.assert.equal( wallCell2.emptyContent(), true);
            chai.assert.equal( bornPlace.emptyContent(), true);
            chai.assert.equal( bomber.isAlive(), false); //TODO: falta este caso
            chai.assert.equal( bomber.isDead(), true);
        });

    });

});
