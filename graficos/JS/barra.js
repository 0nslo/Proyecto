function grafico_barra(){
    const ctx = document.getElementById("myChart-barra");
        new Chart(ctx, {
            type: "bar",
            data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 1],
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



