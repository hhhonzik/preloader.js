
# Preloader.js

---
**[Download latest](https://raw.github.com/hhhonzik/Preloader.js/master/preloader.js) |**
**[Code](#code) |**

---
### Current version: v1.0.9 (2014-01-06)
## Introduction

This simple jQuery plugin will help you with creating preloaders on your website. This plugin does not have any visual interface, you need to create it by yourself. This is just a simple Javascript 


## <a name="code"></a> Code


    // you can call it on just part of the website
    $('body').preload({
        process: function(done, total){ // process function is called whenever an image is loaded.
            alert("You have " + (done / total)*100  + "% ");
        },
        complete: function(){ // complete function is called at the end.
            alert("everything has loaded");       
        }
        
    });


## Author:
* **[Jan Stepanovsky](http://www.janstepanovsky.cz/)** 
