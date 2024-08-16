document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById("formContainer");
    const formHTML = `
        <form id="triangleForm">
            <label for="side1">Lado 1:</label>
            <input type="number" id="side1" name="side1" required>
            <label for="side2">Lado 2:</label>
            <input type="number" id="side2" name="side2" required>
            <label for="side3">Lado 3:</label>
            <input type="number" id="side3" name="side3" required>
            <button type="submit">Classificar</button>
        </form>
    `;
    formContainer.innerHTML = formHTML;

    document.getElementById("triangleForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const side1 = parseFloat(document.getElementById("side1").value);
        const side2 = parseFloat(document.getElementById("side2").value);
        const side3 = parseFloat(document.getElementById("side3").value);

        if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
            document.getElementById("result").textContent = "Por favor, digite valores válidos maiores que zero para os lados do triângulo.";
            return;
        }

        const tipo = tipoTriangulo(side1, side2, side3);
        document.getElementById("result").textContent = `O triângulo é do tipo: ${tipo}`;
    });
});

function tipoTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}
