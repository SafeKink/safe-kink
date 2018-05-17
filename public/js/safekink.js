console.log("Public safekink.js is online");

function modalHtml(data){	/* function to create html content string in tooltip div. */
  console.log(data[1].STI)
    return
      "<ul>" +
      "<li> Chlamydia: " + data[0].Cases +
      "</ul"; 
      
      // "<table>" +
      // "<tr><td>Chlamydia:</td><td>"+ data[0].Cases +"</td></tr>"+
      // "<tr><td>Gonorrhea:</td><td>"+ data[1].Cases +"</td></tr>"+
      // "<tr><td>Primary and Secondary Syphilis:</td><td>"+ data[2].Cases +"</td></tr>"+
      // "<tr><td>HIV:</td><td>"+ data[3].Cases +"</td></tr>"+
      // "</table>";
  }
  
  var sampleData ={};	/* Sample random data. */	
  ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
  "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
  "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
  "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
  "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
    .forEach(function(d){ 
      var low=Math.round(100*Math.random()), 
          mid=Math.round(100*Math.random()), 
          high=Math.round(100*Math.random());
      sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
          avg:Math.round((low+mid+high)/3), color:d3.interpolate("#fdd8fb", "#e938e0")(low/100)}; 
    });
  
  /* draw states on id #statesvg */	
  uStates.draw("#statesvg", sampleData, modalHtml);
  
  d3.select(self.frameElement).style("height", "600px"); 


