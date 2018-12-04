<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
  </head>
  <body>
      <form id = "sampleform">
      <input type="text" data-type="email" id=email>
      <input data-type="text" type="text" data-min="5" data-max="10" >
      <input data-type="name" type="text" data-min="5" data-max="10" >
      
      <button type="button" onclick="new valid8('sampleform').check();" id="sbmt">Ok</button>

      </form>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    
    <script src="valid8.js"></script>
  </body>
</html>