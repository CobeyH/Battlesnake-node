import { Point } from "./types/battlesnake";

function isSnake(point: Point, data: any): boolean {
  if (data.snakes.contains(point)) {
    return true;
  }
  return false;
}

function isFood(point: Point, data: any): boolean {
  if (data.food.contains(point)) {
    return true;
  }
  return false;
}

function isWall(point: Point, data: any): boolean {
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

function isSafe(point: Point, data: any): boolean {
  if (isWall(point, data)) {
    return false;
  }
  if (isSnake(point, data)) {
    return false;
  }
  return true;
}

function distanceToPoint(point1: Point, point2: Point): number {
  let xdiff = Math.abs(point1[0] - point2[0]);
  let ydiff = Math.abs(point1[1] - point2[1]);
  return xdiff + ydiff;
}
