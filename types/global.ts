export type BreakpointQuery = `min-width: ${number}px`;

export interface Breakpoints {
  sm: BreakpointQuery;
  md: BreakpointQuery;
  lg: BreakpointQuery;
  xl: BreakpointQuery;
  xxl: BreakpointQuery;
  xxxl: BreakpointQuery;
}

export type ISODateString =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;
