console.log("Public safekink.js is online");

function modalHtml(data){	/* function to create html content string in tooltip div. */
  // console.log(data[1].STI)
    return
      // "<ul>" +
      // "<li> Chlamydia: " + data[0].Cases +
      // "</ul"; 
      
      // "<table>" +
      // "<tr><td>Chlamydia:</td><td>"+ data[0].Cases +"</td></tr>"+
      // "<tr><td>Gonorrhea:</td><td>"+ data[1].Cases +"</td></tr>"+
      // "<tr><td>Primary and Secondary Syphilis:</td><td>"+ data[2].Cases +"</td></tr>"+
      // "<tr><td>HIV:</td><td>"+ data[3].Cases +"</td></tr>"+
      // "</table>";
  }

  uStates.draw("#statesvg", sampleData, modalHtml);
  
  var sampleData ={};	/* Sample random data. */	

  // ["Hawaii", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
  // "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
  // "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
  // "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
  // "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
  var states = ["Hawaii", "Alaska", "Florida", "South Carolina", "Georgia", "Alabama", "North Carolina", "Tennessee", "Rhode Island", "Connecticut", "Massachusetts",
  "Maine", "New Hampshire", "Vermont", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "West Virginia", "Kentucky", "Ohio", 
  "Michigan", "Wyoming", "Montana", "Idaho", "Washington", "District of Columbia", "Texas", "California", "Arizona", "Nevada", "Utah", 
  "Colorado", "New Mexico", "Oregon", "North Dakota", "South Dakota", "Nebraska", "Iowa", "Mississippi", "Indiana", "Illinois", "Minnesota", 
  "Wisconsin", "Missouri", "Arkansas", "Oklahoma", "Kansas", "Louisiana", "Virginia"];
    states.forEach(function(d){ 
      $.get("/api/states/" + d, function(res) {
        console.log(res); 
        var low = res[2].Cases, 
            mid = res[1].Cases, 
            high = res[0].Cases;
        sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
            avg:Math.round((low+mid+high)/3), color:d3.interpolate("#fdd8fb", "#e938e0")(low/1000)}; 

        if (Object.keys(sampleData).length > states.length -1){
          $("svg").find('path').each(function(){
           
            var name = $(this).attr('data-name'),
                rates = sampleData[name];
            if (!rates){
              console.log(name);
            }
            $(this).css('fill', rates.color);
          })
        }
      });
    });
    console.log(sampleData);

  /* draw states on id #statesvg */	
  // uStates.draw("#statesvg", sampleData, modalHtml);
  
  d3.select(self.frameElement).style("height", "600px"); 


