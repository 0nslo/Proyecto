function grafico_barra(){
    const ctx = document.getElementById("myChart-barra");
        new Chart(ctx, {
            type: "bar",
            data: {
            labels: ["Geo Biomass Other - TWh", "Solar Generation - TWh", "Wind Generation - TWh", "Hydro Generation - TWh"],
            datasets: [
                {
                label: "Generacion de energia en Argentina medido en TWh para el año 2021",
                data: [2.1038966, 19, 2.1955633, 12.937551, 19.597536, ],
                borderWidth: 3,
                },
            ],
            },
            options: {
                scales: {
                    y: {
                    beginAtZero: true,
                    },
                },
            },
        });
}
grafico_barra()



