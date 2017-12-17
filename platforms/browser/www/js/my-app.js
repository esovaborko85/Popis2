// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true,	
	
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
	
   myApp.alert("Device is ready!");	
	
});



myApp.onPageInit('index', function (page) {
    
	myApp.alert('Here comes index page');
    
})

myApp.onPageInit('popis', function (page) {
    
var myCalendar = myApp.calendar({
    input: '#calendar-input'
});   

var calendarRange = myApp.calendar({
    input: '#calendar-range',
    dateFormat: 'dd M yyyy',
    rangePicker: true
});

    
})



myApp.onPageInit('unos', function (page) {
	$$("#testScan").on('click', function(obj) {

	cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Meti barcod u scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,EAN_8, EAN_13", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});

	
})




	