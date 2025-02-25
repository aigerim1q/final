<html lang="en">
<head>
  <title>BMI Calculator</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="container">
    <h1>BMI Calculator</h1>
    <form action="/calculate-bmi" method="POST">
      <label for="weight">Weight (kg):</label>
      <input type="number" id="weight" name="weight" required min="1" step="any">
      <label for="height">Height (m):</label>
      <input type="number" id="height" name="height" required min="0.1" step="any">
      <button type="submit">Calculate BMI</button>
    </form>
    
    <% if (bmi) { %>
      <% 
        let color;
        if (category === "Normal weight") {
          color = "green";
        } else if (category === "Underweight") {
          color = "yellow";
        } else {
          // Для категорий "Overweight" и "Obese" — красный цвет
          color = "red";
        }
      %>
      <div class="result">
        <h3>Your BMI: <%= bmi %></h3>
        <p style="color: <%= color %>;">Category: <%= category %></p>
      </div>
    <% } %>
  </div>
</body>
</html>
