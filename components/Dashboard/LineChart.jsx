import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal, scaleLinear, axisBottom, axisRight, format } from "d3";

const LineChart = () => {
  const svgRef = useRef();
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const [data, setData] = useState([
    { x: 0, y: 10 },
    { x: 1, y: 20 },
    { x: 2, y: 15 },
    { x: 3, y: 25 },
    { x: 4, y: 30 },
  ]);

  useEffect(() => {
    const svg = select(svgRef.current);

    // Scales
    const xScale = scaleLinear()
      .domain([Math.max(0, data.length - 5), data.length - 1]) // Show the last 5 data points initially
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 100]).range([100, 0]);

    // Axes generators
    const xAxisGenerator = axisBottom(xScale).ticks(data.length);
    const yAxisGenerator = axisRight(yScale);

    // Create axes if they don't exist
    if (!xAxisRef.current) {
      xAxisRef.current = svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${svg.node().getBoundingClientRect().height - 45})`) // Adjust margin as needed
        .call(xAxisGenerator);
    }

    if (!yAxisRef.current) {
      yAxisRef.current = svg.append("g").attr("class", "y-axis").call(yAxisGenerator);
    }

    // Line generator
    const myLine = line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      
    //   .curve(curveCardinal);

    // Update x-axis
    xAxisRef.current.transition().duration(750).call(xAxisGenerator.tickFormat(format("d")));

    // Update y-axis (if needed)
    yAxisRef.current.call(yAxisGenerator);

    // Draw the line
    svg.selectAll(".line")
    .data([data])
    .join("path")
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", "#00bfa6")
    .transition()
    .duration(750)
    .attr("d", myLine);

  }, [data]);

  // Function to add random data every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [...data, { x: Math.round(data.length), y: Math.round(Math.random() * 100) }];
      setData(newData);
    }, 2000);
    return () => clearInterval(interval);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;
