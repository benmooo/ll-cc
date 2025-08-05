import { Component } from "solid-js";
import { cn } from "~/lib/utils";

// --- Types ---

export type Side = "red" | "black";

export interface Piece {
  id: string;
  name: string;
  side: Side;
  rank: number;
  file: number;
}

// --- Component ---

interface ChessPieceProps {
  piece: Piece;
  x: number;
  y: number;
  squareSize: number;
}

const ChessPiece: Component<ChessPieceProps> = (props) => {
  const isRed = props.piece.side === "red";
  const pieceColor = isRed ? "#c81e1e" : "#1a1a1a";
  // const pieceFill = "transparent";

  return (
    <g class="cursor-pointer group">
      <circle
        cx={props.x}
        cy={props.y}
        r={props.squareSize / 2 - 4}
        // fill={pieceFill}
        stroke="#1a1a1a"
        stroke-width="1.5"
        class={cn("group-hover:fill-amber-300 transition-colors fill-amber-100")}
      />
      <text
        x={props.x}
        y={props.y}
        dy=".3em"
        text-anchor="middle"
        font-size={`${props.squareSize / 2}`}
        font-family="'KaiTi', 'STKaiti', serif;"
        fill={pieceColor}
        class="select-none"
      >
        {props.piece.name}
      </text>
    </g>
  );
};

export default ChessPiece;
