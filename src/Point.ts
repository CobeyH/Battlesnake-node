import { Point } from "./types/battlesnake";

function issnake(point: Point, data: any): boolean {
  if (data.snakes.contains(point)) {
    return true;
  }
  return false;
}

function isfood(point: Point, data: any): boolean {
  if (data.food.contains(point)) {
    return true;
  }
  return false;
}

function iswall(point: Point, data: any): boolean {
  if (
    point[0] < 0 ||
    point[0] >= data.board.width ||
    point[1] < 0 ||
    point[1] >= data.board.height
  ) {
    return true;
  }
  return false;
}
