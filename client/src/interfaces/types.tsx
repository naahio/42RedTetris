
export enum Block {
    I = 'I',
    J = 'J',
    L = 'L',
    O = 'O',
    S = 'S',
    T = 'T',
    Z = 'Z',
}

export enum EmptyCell {
    Empty = 'Empty',
}

export type CellOptions = Block | EmptyCell;

export type BoardShape = CellOptions[][];

export type BlockShape = boolean[][];

type ShapesObj = {
    [key in Block]: {
      shape: BlockShape;
      sz: number;
    };
  };

export const SHAPES: ShapesObj= {
    I: {
        shape: [
          [false, false, false, false],
          [false, false, false, false],
          [true, true, true, true],
          [false, false, false, false],
        ],
        sz: 4,
      },
      J: {
        shape: [
          [false, false, false],
          [true, false, false],
          [true, true, true],
        ],
        sz: 3,
      },
      L: {
        shape: [
          [false, false, false],
          [false, false, true],
          [true, true, true],
        ],
        sz: 3,
      },
      O: {
        shape: [
          [true, true],
          [true, true],
        ],
        sz: 2,
      },
      S: {
        shape: [
          [false, false, false],
          [false, true, true],
          [true, true, false],
        ],
        sz: 3,
      },
      T: {
        shape: [
          [false, false, false],
          [false, true, false],
          [true, true, true],
        ],
        sz: 3,
      },
      Z: {
        shape: [
          [false, false, false],
          [true, true, false],
          [false, true, true],
        ],
        sz: 3,
      },
}