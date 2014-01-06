
# Preloader.js

---
**[Download latest](https://raw.github.com/hhhonzik/Preloader.js/master/preloader.js) |**
**[Code](#code)

---
### Current version: v1.0 (2014-01-06)
## Introduction

This simple jQuery plugin will help you with creating preloaders on your website. This plugin does not have any visual interface, you need to create it by yourself. This is just a simple Javascript library for handling your images.


## <a name="code"></a> Example 1

Usage is explained in example code in this project.

    // you can call it on just part of the website
    $('body').preload({
        progress: function(done, total){ // process function is called whenever an image is loaded.
            alert("You have " + (done / total)*100  + "% ");
        },
        complete: function(){ // complete function is called at the end.
            alert("everything has loaded");       
        }
        
    });


## Example 2 - simple preloader

If you want to have really simple preloader, all you need to do is style  and you can use this simple function. Note that preloader should be already  created in DOM when page loads, because now visitors must download JavaScript file first. 

# JS

	$(document).ready(function(){
		$('body').append('<div id="#preloader"></div>');
		$("#preloader").css({
			'top': 0,
			'left': 0,
			'bottom': 0,
			'right': 0,
			'position': 'absolute',

			//your bg image
			'background': '#fff url(http://preloaders.net/preloaders/484/Instagram%20loading.gif) no-repeat center' 

			})

		$('body').preloader({
			complete: function(){
				$("#preloader").fadeOut();

				//here comes your animations after page loads

			}
		})

		// click events etc.
	})



## Author:
* **[Jan Stepanovsky](http://www.janstepanovsky.cz/)** 
