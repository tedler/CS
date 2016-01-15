<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ted Lermontov : Freelance Web &amp; UI Designer</title>
  <link href="css/style.css" rel="stylesheet">

  <script src="http://maps.googleapis.com/maps/api/js"></script>

  <!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAlKe9WqDbSOYFfIRC-_nW66sfE4WH8kQ&callback=initMap"></script> -->

</head>

<body>

<header class="animsition" data-animsition-in-class="fade-in-down" data-animsition-out-class="fade-out-up" data-animsition-in-duration="1000" data-animsition-out-duration="500">

<section class="top va" style="background-image: url(images/bg-top-home.jpg)">
    
    <div class="centered fadeout">
      <h1 class="short">contacts</h1>
      <p>here are a handful of projects that showcase my skills and passion</p>
      <i class="fa fa-angle-down fa-2x t40 color-blue"></i>
    </div>

</section>
  
  <nav id="top-nav" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand animsition-link" href="index.html"><img src="images/logo-ted-lermontov.svg" alt=""></a>
      </div>
      
      <div id="navbar" class="navbar-collapse collapse">
        
        <ul class="nav navbar-nav navbar-right">
          <li><a href="about.html" class="animsition-link">about<span></span></a></li>
          <li><a href="works.html" class="animsition-link">works<span></span></a></li>
          <li class="active"><a href="contacts.php" class="animsition-link">contacts<span></span></a></li>
          <li class="hidden-xs"><div class="nav-separator"></div></li>
          <li class="nav-social hidden-xs"><a href="#contact"><i class="fa fa-facebook"></i></a></li>
          <li class="nav-social hidden-xs"><a href="#contact"><i class="fa fa-dribbble"></i></a></li>
          <li class="nav-social hidden-xs"><a href="#contact"><i class="fa fa-linkedin"></i></a></li>
          
        </ul>

      </div><!--/.nav-collapse -->
    </div>
  </nav>

</header>

<div class="content animsition" data-animsition-in-class="fade-in-up" data-animsition-out-class="fade-out-down" data-animsition-in-duration="1000" data-animsition-out-duration="500">

  <section class="original bg-blue">
    
    <div class="container">

      <div class="row t80 b80">

        <div class="col-sm-4"></div>
        <div class="col-sm-8"><h3 class="color-white align-sm-center">I specialize in graphic design and illustration for editorial projects both print and digital.</h3></div>
        
      </div>

    </div>


  <div class="container-fluid bg-blue">
    <div class="container">
      <div class="row b80">
        <div class="col-sm-4">
          <div class="container-details">

            <h4>contact details</h4>
            <p>183 Broken Head Rd,<br>Suffolk Park, NSW, 2481</p>
            <hr class="bg-blue-light t20 b20">
            <p>+61 (2) 6685 4284<br>+61 (4) 2388 0877</p>
            <hr class="bg-blue-light t20 b20">
            <p><a href="mailto:tedler@gmail.com">tedler [ at ] gmail.com</a></p>

          </div>
        </div>
        
        <div class="col-sm-8 bg-white">
          <div class="container-form">

          <form id="contact" method="post" action="">

            <div class="row">
              <div class="col-md-5">
                  <div class="container-form-box">

                    <div>
                      <label for="nameFrom">name</label>
                      <input type="text" name="nameFrom" id="nameFrom" value="<?= $_POST['nameFrom']; ?>"/>
                    </div>

                    <div>
                      <label for="emailFrom">email</label>
                      <input type="text" name="emailFrom" id="emailFrom" value="<?= $_POST['emailFrom']; ?>"/>
                    </div>
                    
                    <div>
                      <label for="captcha" id="captcha_label"></label>
                      <input id="captcha" type="text" name="captcha"/>
                    </div>

                  </div>
              </div>

              <div class="col-md-7">
                <div class="container-form-box">
                
                  <div>
                    <label for="message">message</label>
                    <textarea rows="7" cols="50" name="message" id="message"><?= $_POST['message']; ?></textarea>
                  </div>

                </div>
              </div>
            </div>

            <div class="row">
               <div class="col-md-8 form-message">
                 <p id="contact-message-required" class="display-none align-sm-center"><i class="fa fa-exclamation-circle color-red"></i>&nbsp;&nbsp;Please fill in the required fields.</p>
                 <p id="contact-message-sent" class="display-none align-sm-center"><i class="fa fa-check-circle color-blue"></i>&nbsp;&nbsp;Thank you, message is sent!</p>
               </div>
               <div class="col-md-4 form-button">
                 <a class="btn btn-default" id="contact_send">send</a>
               </div>
            </div>

          </form>

          </div>

        </div>
        
      </div>

    </div>

  </div> 


  </section>

  <section class="original">

  <div class="container-fluid">
    <div class="row">
      
        <div class="col-sm-12 container-googlemap">
  
          <div class="container-googlemap-map" id="googleMap">
            

          </div>
          <div class="container-googlemap-color"></div>

          <div class="googlemap-circle va">
            
            <div class="centered">
              <p>Suffolk Park</p>
              <hr class="bg-blue-light t10 b10">
              <p>NSW</p>
            </div>

          </div>

        </div>
      
    </div>
  </div>  

  </section>


<!--   <section class="original">

    <div class="container">

      <footer>
                
        <p class="color-gray">&copy; 2016 ted lermontov</p>

      </footer>

    </div> 

  </section> -->


</div>

<script src="js/script.js"></script>
<script>
  
  // Contacts: Googlemaps API - AIzaSyAAlKe9WqDbSOYFfIRC-_nW66sfE4WH8kQ

  function initialize() {
    
    var myCenter=new google.maps.LatLng(-28.6871082,153.6088911);
    var marker;

    var mapProp = {

      center:myCenter,
      zoom:12,
      disableDefaultUI:true,
      mapTypeId:google.maps.MapTypeId.ROADMAP

    };

    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

    $(".googlemap-circle").click(function(){

      var marker=new google.maps.Marker({
        position:myCenter,
        animation:google.maps.Animation.BOUNCE
        });

      $(".googlemap-circle").addClass("display-none");

      map.setZoom(13);
      marker.setMap(map);

    });

  }

  google.maps.event.addDomListener(window, 'load', initialize);

</script>

</body>
</html>