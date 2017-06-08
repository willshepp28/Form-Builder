

var data = formData;
var form = document.querySelector('form');
var br = document.createElement("br");





for(var i = 0; i < formData.length; i++) {



  if (data[i].type === 'select') {
        var select = document.createElement('select');

        select.type = data[i].type;
        select.placeholder = data[i].label;

        for (var j = 0; j < data[i].options.length; j++) {
          var option = document.createElement('option');
          // select.setAttribute("id", data[i].id);

          option.value = data[i].options[j].value;
          option.innerHTML = data[i].options[j].value;

          select.appendChild(option);

        }


        // appends first input to the form

        form.appendChild(select);

        form.appendChild(document.createElement("br"));


  } else if (data[i].type === 'textarea') {

        var textarea = document.createElement('textarea');
        textarea.setAttribute("id", data[i].id);
        textarea.type = data[i].type;
        textarea.placeholder = data[i].label;

        // appends first input to the form
        form.appendChild(textarea);
        form.appendChild(document.createElement("br"));

  }

  else  {
        var input = document.createElement('input');
        input.setAttribute("id", data[i].id);
        input.type = data[i].type;
        input.placeholder = data[i].label;

        // appends first input to the form
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
  }



}
