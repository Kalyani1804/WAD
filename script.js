
$(document).ready(function() {
    $('#search-button').click(function() {
      var countryName = $('#country-input').val();
      searchCountry(countryName);
    });
  });
  
  function searchCountry(countryName) {
    var endpoint = 'https://restcountries.com/v3.1/name/' + countryName;
    $.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        displayResults(data);
      },
      error: function() {
        console.log('Error occurred during the search.');
      }
    });
  }
  
  function displayResults(results) {
    var container = $('#result-container');
    container.empty(); // Clear previous results
  
    if (results.length === 0) {
      container.text('No results found.');
      return;
    }
  
    results.forEach(function(result) {
      var countryName = result.name.common;
      var capital = result.capital;
      var population = result.population.toLocaleString();
  
      var countryInfo = $('<div>').addClass('country-info');
      var nameElement = $('<h2>').text(countryName);
      var capitalElement = $('<p>').text('Capital: ' + capital);
      var populationElement = $('<p>').text('Population: ' + population);
  
      countryInfo.append(nameElement, capitalElement, populationElement);
      container.append(countryInfo);
    });
  }