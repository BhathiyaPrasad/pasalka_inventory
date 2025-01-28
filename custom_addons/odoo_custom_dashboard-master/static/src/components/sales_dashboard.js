/** @odoo-module */

import { registry } from "@web/core/registry"
import {KpiCard} from "./js/card"
const { Component , onWillStart , useRef , onMounted } = owl
import {loadJS} from "@web/core/assets";


export class OwlSalesDashboard extends Component {
    setup() {
        this.chartRef = useRef("chart")
        onWillStart(async () => {
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js")
        })
        onMounted(() =>{
            const data = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
              ];

              new Chart(
                this.chartRef.el,
                {
                  type: 'line',
                  data: {
                    labels: data.map(row => row.year),
                    datasets: [
                      {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                      }
                    ]
                  },
                  options: {
                      responsive: true,
                      plugins: {
                          legend: {
                              position: 'bottom'
                          },
                          title: {
                              display: true,
                              text: 'Chart.js Doughnut Chart'
                          }
                      }
                  }}
              );
        })
    }
}

OwlSalesDashboard.template = "owl.OwlSalesDashboard"
OwlSalesDashboard.components = { KpiCard }

registry.category("actions").add("owl.sales_dashboard", OwlSalesDashboard)