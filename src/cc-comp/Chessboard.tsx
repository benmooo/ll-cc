import { Component, For } from "solid-js";
import ChessPiece, { Piece } from "./ChessPiece";

// --- Constants and Types ---

const SQUARE_SIZE = 60;
const PADDING = 30;
const BOARD_WIDTH = 8 * SQUARE_SIZE;
const BOARD_HEIGHT = 9 * SQUARE_SIZE;
const SVG_WIDTH = BOARD_WIDTH + 2 * PADDING;
const SVG_HEIGHT = BOARD_HEIGHT + 2 * PADDING;

// r: Rook 車
// h: Horse 馬
// e: Elephant 象
// a: Advisor 士
// k: King 帥
// c: Cannon 炮
// p: Pawn 兵
const initialPieces: Piece[] = [
  // Red pieces
  { id: "r_r1", name: "車", side: "red", rank: 9, file: 0 },
  { id: "r_h1", name: "馬", side: "red", rank: 9, file: 1 },
  { id: "r_e1", name: "象", side: "red", rank: 9, file: 2 },
  { id: "r_a1", name: "士", side: "red", rank: 9, file: 3 },
  { id: "r_k", name: "帥", side: "red", rank: 9, file: 4 },
  { id: "r_a2", name: "士", side: "red", rank: 9, file: 5 },
  { id: "r_e2", name: "象", side: "red", rank: 9, file: 6 },
  { id: "r_h2", name: "馬", side: "red", rank: 9, file: 7 },
  { id: "r_r2", name: "車", side: "red", rank: 9, file: 8 },
  { id: "r_c1", name: "炮", side: "red", rank: 7, file: 1 },
  { id: "r_c2", name: "炮", side: "red", rank: 7, file: 7 },
  { id: "r_p1", name: "兵", side: "red", rank: 6, file: 0 },
  { id: "r_p2", name: "兵", side: "red", rank: 6, file: 2 },
  { id: "r_p3", name: "兵", side: "red", rank: 6, file: 4 },
  { id: "r_p4", name: "兵", side: "red", rank: 6, file: 6 },
  { id: "r_p5", name: "兵", side: "red", rank: 6, file: 8 },

  // Black pieces
  { id: "b_r1", name: "車", side: "black", rank: 0, file: 0 },
  { id: "b_h1", name: "馬", side: "black", rank: 0, file: 1 },
  { id: "b_e1", name: "相", side: "black", rank: 0, file: 2 },
  { id: "b_a1", name: "仕", side: "black", rank: 0, file: 3 },
  { id: "b_k", name: "將", side: "black", rank: 0, file: 4 },
  { id: "b_a2", name: "仕", side: "black", rank: 0, file: 5 },
  { id: "b_e2", name: "相", side: "black", rank: 0, file: 6 },
  { id: "b_h2", name: "馬", side: "black", rank: 0, file: 7 },
  { id: "b_r2", name: "車", side: "black", rank: 0, file: 8 },
  { id: "b_c1", name: "砲", side: "black", rank: 2, file: 1 },
  { id: "b_c2", name: "砲", side: "black", rank: 2, file: 7 },
  { id: "b_p1", name: "卒", side: "black", rank: 3, file: 0 },
  { id: "b_p2", name: "卒", side: "black", rank: 3, file: 2 },
  { id: "b_p3", name: "卒", side: "black", rank: 3, file: 4 },
  { id: "b_p4", name: "卒", side: "black", rank: 3, file: 6 },
  { id: "b_p5", name: "卒", side: "black", rank: 3, file: 8 },
];

const Chessboard: Component = () => {
  const getCoords = (rank: number, file: number) => ({
    x: PADDING + file * SQUARE_SIZE,
    y: PADDING + rank * SQUARE_SIZE,
  });

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      class="bg-amber-100"
    >
      <defs>
        <style>
          {`
            .river-text {
              font-size: 30px;
              font-family: 'KaiTi', 'STKaiti', serif;
              fill: #777;
              user-select: none;
            }
          `}
        </style>
      </defs>

      {/* Board Background */}
      <rect
        x={PADDING - SQUARE_SIZE / 2}
        y={PADDING - SQUARE_SIZE / 2}
        width={BOARD_WIDTH + SQUARE_SIZE}
        height={BOARD_HEIGHT + SQUARE_SIZE}
        fill="transparent"
        stroke="#1a1a1a0f"
        stroke-width="2.5"
      />

      {/* Grid Lines */}
      <g stroke="#1a1a1a" stroke-width="1.5">
        {/* Vertical lines */}
        <For each={Array(9).fill(0)}>
          {(_, i) => (
            <>
              <line
                x1={PADDING + i() * SQUARE_SIZE}
                y1={PADDING}
                x2={PADDING + i() * SQUARE_SIZE}
                y2={PADDING + 4 * SQUARE_SIZE}
              />
              <line
                x1={PADDING + i() * SQUARE_SIZE}
                y1={PADDING + 5 * SQUARE_SIZE}
                x2={PADDING + i() * SQUARE_SIZE}
                y2={PADDING + 9 * SQUARE_SIZE}
              />
            </>
          )}
        </For>
        {/* Horizontal lines */}
        <For each={Array(10).fill(0)}>
          {(_, i) => (
            <line
              x1={PADDING}
              y1={PADDING + i() * SQUARE_SIZE}
              x2={PADDING + 8 * SQUARE_SIZE}
              y2={PADDING + i() * SQUARE_SIZE}
            />
          )}
        </For>
      </g>

      {/* Palace Lines */}
      <g stroke="#1a1a1a" stroke-width="1.5">
        {/* Black Palace */}
        <line
          x1={getCoords(0, 3).x}
          y1={getCoords(0, 3).y}
          x2={getCoords(2, 5).x}
          y2={getCoords(2, 5).y}
        />
        <line
          x1={getCoords(0, 5).x}
          y1={getCoords(0, 5).y}
          x2={getCoords(2, 3).x}
          y2={getCoords(2, 3).y}
        />
        {/* Red Palace */}
        <line
          x1={getCoords(7, 3).x}
          y1={getCoords(7, 3).y}
          x2={getCoords(9, 5).x}
          y2={getCoords(9, 5).y}
        />
        <line
          x1={getCoords(7, 5).x}
          y1={getCoords(7, 5).y}
          x2={getCoords(9, 3).x}
          y2={getCoords(9, 3).y}
        />
      </g>

      {/* River */}
      <text
        x={PADDING + 1.5 * SQUARE_SIZE}
        y={PADDING + 4.65 * SQUARE_SIZE}
        class="river-text"
      >
        楚 河
      </text>
      <text
        x={PADDING + 5.5 * SQUARE_SIZE}
        y={PADDING + 4.65 * SQUARE_SIZE}
        class="river-text"
      >
        漢 界
      </text>

      {/* Pieces */}
      <g>
        <For each={initialPieces}>
          {(piece) => {
            const { x, y } = getCoords(piece.rank, piece.file);
            return (
              <ChessPiece piece={piece} x={x} y={y} squareSize={SQUARE_SIZE} />
            );
          }}
        </For>
      </g>
    </svg>
  );
};

export default Chessboard;
