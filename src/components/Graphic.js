import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts'

const Graphic = (props) => {
    


    const graphicSettings = {
        series: [{
            name: 'BTC price',
            data: props.coinData
        }],
        options: {
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Stock Price Movement',
                align: 'left'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                },
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return `$${val}`
                    },
            },
            title: {
                text: 'Price'
            },
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return `$${val}`
                    }
                }
            }
        },
        
        
    }

    return (
        <div className="graphic">
            <div id='chart'>
                <Chart 
                    options={graphicSettings.options}
                    series={graphicSettings.series}
                    type="area"
                    height={350}
                    />
            </div>
        </div>
    );
}

export default Graphic;