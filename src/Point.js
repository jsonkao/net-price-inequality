import React from 'react';
import injectSheet from 'react-jss';
import { select as d3Select } from 'd3-selection';
import { animTime, pointRadius } from './constants';

const styles = theme => ({
  visiblePoint: {
    fill: props => theme[props.theme],
    animation: 'fadeIn', // TODO: CENTRALIZE THESE ANIMATIONS
    animationDuration: '0.5s',
  },
  hiddenPoint: {
    fill: props => theme[props.theme],
    animation: 'fadeOut',
    animationDuration: '0.5s',
    opacity: 0,
  },
});

const Point = ({ classes, isVisible = true, x, y, delay }) => (
  <circle
    className={isVisible ? classes.visiblePoint : classes.hiddenPoint}
    ref={node =>
      d3Select(node)
        .transition()
        .delay(delay)
        .duration(animTime)
        .attr('cy', y)}
    cx={x}
    r={pointRadius}
  />
);

export default injectSheet(styles)(Point);
