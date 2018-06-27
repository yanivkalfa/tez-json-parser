var jsonField, resultsContainer, getResults;
jsonField = $('#jsonfield');
resultsContainer = $('#resultsContainer');
getResults = $('#getResults');

function handleEvent() {
  var value, parsed, rawValue, el, labelEl, valueEl;
  rawValue = jsonField.val();
  try {
    parsed = JSON.parse(rawValue);
    resultsContainer.html('');
    console.log('parsed', parsed);
    for(var key in parsed) {
      value = parsed[key];
      valueEl= $('<span class="col-sm-3">' + key + ': </div>');
      labelEl = $('<span class="col-sm-9">' + value + '</div>');

      if ( key === 'mnemonic' ) {
        value = parsed[key].join(' ');
        labelEl = $('<span class="col-sm-9"><input class="mnemonic" value="' + value + '" /></div>');
      }

      el = $('<div class="row"></div>');
      el.append(valueEl, labelEl);
      resultsContainer.append(el);
    }

  } catch(error) {
    console.error(error);
  }
}



$(document).ready(function(){
  getResults.on('click', handleEvent);
  jsonField.on('input', handleEvent);
});









