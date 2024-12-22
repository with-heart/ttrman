export type PlayerColor = 'black' | 'blue' | 'green' | 'red' | 'yellow'

export interface Player {
  readonly color: PlayerColor

  /** The routes owned by the player. */
  readonly routes: Route[]

  /** The number of train pieces the player has remaining. */
  readonly trains: number
}

/** An (x,y) point on the map. */
export interface Point {
  readonly x: number
  readonly y: number
}

export interface City extends Point {
  readonly name: string
}

export interface BaseRoute {
  readonly type: RouteType

  /** Unique identifier for the route. */
  readonly id: `${string}-${string}`

  /** The cities the route connects. */
  readonly cities: [string, string]

  /** The number of spaces in the route. */
  readonly spaces: number
}

export interface SingleRoute extends BaseRoute {
  readonly type: RouteType.Single

  /** The color of the route. */
  readonly color: RouteColor
}

export interface DoubleRoute extends BaseRoute {
  readonly type: RouteType.Double

  /** The colors of the two lines of this route. */
  readonly colors: [RouteColor, RouteColor]
}

export type Route = SingleRoute | DoubleRoute

export type RouteColor =
  | 'pink'
  | 'white'
  | 'blue'
  | 'yellow'
  | 'orange'
  | 'black'
  | 'red'
  | 'green'
  | 'none'

export enum RouteType {
  Single = 'single',
  Double = 'double',
}

export interface DestinationTicket {
  /** The cities this ticket must connect. */
  readonly cities: [string, string]

  /** The number of points this ticket is worth. */
  readonly points: number
}
