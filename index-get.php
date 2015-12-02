<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Builder - Get Product</title>
        <script src="lib/jquery-2.1.4.min.js"></script>
        <script src="lib/minified/TweenMax.min.js"></script>
        <script src="lib/minified/jquery.gsap.min.js"></script>
        <script src="//cdn.ckeditor.com/4.5.4/standard/ckeditor.js"></script>
        <script src="lib/mui.min.js"></script>
        <script src="lib/js.cookie.js"></script>
        <script src="lib/moment.min.js"></script>

        <link href="http://www.xtra-vision.co.uk/Styles?v=dDdzXH6u5PNne_IcdeUf8MwRjNZubDIEsNvKypRCswM1" rel="stylesheet"/>
        <script src="http://www.xtra-vision.co.uk/Scripts/Common?v=JHuAT9fmKWn9vj3MEEgIiw8UP09dmem6wagg7X1_qtU1"></script>
        
        <link href="css/mui.min.css" rel="stylesheet" type="text/css" />
        <link href="css/style.css" rel="stylesheet" type="text/css">

    </head>
    <body>
        <div class="mui-appbar">
            <!-- content -->
        </div>
        <div class="newsletter-tool">
            <h1 id="title">Newsletter tool</h1>
        
            <div class="mui-panel">       
                <form id="formy-1" class="mui-form">
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="text" size="60" id="product-url" />
                        <label>Product URL</label>
                    </div>
                    <button class="mui-btn mui-btn--primary get-product">Get Product</button>
                </form>
            </div>
            
            <div class="mui-textfield mui-textfield--float-label">
                <input type="text" id="product-title-1" class="title" size="60" />
                <label>Product Title</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="text" size="60" id="product-synopsis-1" class="product-synopsis" />
                <label>Product Synopsis</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">    
                <input type="text" size="60" id="image-url-1" class="image" />
                <label>Image URL</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="text" size="60" id="product-url-1" class="link" />
                <label>Product URL</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label price">
                <input type="text" id="product-price-1-1" size="4" />
                <label>Price</label>
            </div>
            
        </div>
        
        <div class="output-wrapper">
            <div id="siteHTML" style="display:none;"></div>
        </div>
        
        <script src="src/get-product.js"></script>
        
    </body>
</html>