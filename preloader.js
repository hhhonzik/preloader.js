/*!
 * Copyright 2014 Jan Stepanovsky
 */

(function($) {
    var VERSION = "1.0";


    

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }



    var LoaderView = function LoaderView(){

        var preloadImages = [];
        var preloadContainer;

        var el;

        var onComplete = function(){};
        var onProgress = function(){};

        var preloadDone = 0;
        var preloadTotal = 0;

        function LoaderView(o){
            el = o.el;
            
            onComplete = o.onComplete || onComplete;
            onProgress = o.onProgress || onProgress;
            
            preloadContainer = $("<div></div>").appendTo(el).css({
                    display: "none",
                    width: 0,
                    height: 0,
                    overflow: "hidden"
                });


            // Find images
            findImageInElement(el);
            el.find("*:not(script)").each(function() {
                findImageInElement(this);
            });

            //append images
            preloadTotal = preloadImages.length
            for (i in preloadImages){
                addImageForPreload( preloadImages[i] )
            }

        };


        return LoaderView;

        function completeImageLoading(){
            preloadDone++;

            if(preloadDone == preloadTotal){
                onComplete()
            }else{
                onProgress(preloadDone, preloadTotal);
            }
        }
        function addImageForPreload(url) {
            var image = $("<img />").attr("src", url).bind("load error", function () {
                completeImageLoading();
            }).appendTo(preloadContainer);
        };

        function findImageInElement (element) {
            var url = "";
            
            if ($(element).css("background-image") != "none") {
                var url = $(element).css("background-image");
            } else if (typeof($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
                var url = $(element).attr("src");
            }

            if (url.indexOf("gradient") == -1) {
                url = url.replace(/url\(\"/g, "");
                url = url.replace(/url\(/g, "");
                url = url.replace(/\"\)/g, "");
                url = url.replace(/\)/g, "");

                var urls = url.split(", ");

                for (var i = 0; i < urls.length; i++) {
                    if (urls[i].length > 0 && preloadImages.indexOf(urls[i]) == -1 && !urls[i].match(/^(data:)/i)) {
                        var extra = "";
                        if (!$.support.leadingWhitespace) { // IE 7, 8
                            extra = "?" + Math.floor(Math.random() * 3000);
                        }
                        preloadImages.push(urls[i] + extra);
                    }
                }
            }
        }
            
    }();
        

    (function() {
        
        var cache = {}, viewKey = "loaderView", methods;
        methods = {
            initialize: function(options) {
                return this.each(initialize);
                function initialize() {
                    var $el = $(this);
                    $el.data(viewKey, new LoaderView({
                        el: $el,
                        onComplete: options.complete,
                        onProgress: options.progress
                    }));
                }
            }
        };
        $.fn.preloader = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
    })();

})(window.jQuery);