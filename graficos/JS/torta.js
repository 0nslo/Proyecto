function grafico_torta(){
    const ctx = document.getElementById("myChart-torta");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: [
    'Otras',
    'Solar',
    'Eolica',
    'Hidroelectrica',
  ],
  datasets: [{
    label: 'Energias Renovables en Argentina en TWh para el año 2021',
    data: [2.1038966, 2.1955633, 12.937551, 19.597536],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgba(1, 225, 255, 1)'
    ],
    hoverOffset: 4
  }]
                },
            
        });
}
grafico_torta()