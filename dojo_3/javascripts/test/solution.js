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
            var fragment = explotion.getFragment();
            bombedCell.damaged(fragment);
            chai.assert.equal( bombedCell.emptyContent(), true);
        });

        it.skip("throws a boom to a brick, the boom explotes and the bricks disappears", () => {
        });
    });

});
