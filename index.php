<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Builder</title>
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
            <div class="site-links">
                <a href="http://www.hmv.ie" target="_blank">hmv</a>
                <a href="http://www.hmvdigital.ie" target="_blank">hmv digital</a>
                <a href="http://www.xtra-vision.co.uk" target="_blank">xtra-vision.co.uk</a>
                <a href="http://www.xtra-vision.ie" target="_blank">xtra-vision.ie</a>
            </div>
        </div>
        <div class="newsletter-tool">

            <h1 id="title">Newsletter tool</h1>
            <div id="buttons">
                <button class="mui-btn mui-btn--primary get-html">View HTML</button>
                <button class="mui-btn mui-btn--primary save-html">Save HTML</button>
                <button class="mui-btn mui-btn--primary load-it">Load Cookie</button>
            </div>
            <div class="mui-panel" style="margin-top:10px;">
              <form id="formy" class="mui-form--inline">
                <div class="mui-radio store">
                  <input type="radio" id="hmv-ie" name="store" value="hmv-ie" data-id="hmv">
                  <label for="hmv-ie">hmv</label>
                </div>
                <div class="mui-radio store">
                  <input type="radio" id="hmvdigital" name="store" value="hmvdigital" data-id="hmv Digital">
                  <label for="hmvdigital">hmv Digital</label>
                </div>
                <div class="mui-radio store">
                  <input type="radio" id="xv-ie" name="store" value="xv-ie" data-id="Xtra-vision">
                  <label for="xv-ie">Xtra-vision IE</label>
                </div>
                <div class="mui-radio store">
                  <input type="radio" id="xv-uk" name="store" value="xv-uk" data-id="Xtra-vision">
                  <label for="xv-uk">Xtra-vision UK</label>
                </div>
              </form>
            </div>
            <div id="header" class="mui-panel">
                <div class="mui-textfield">
                    <input type="text" size="60" id="pre-header" />
                    <label>Pre-header</label>
                </div>
                <div class="mui-textfield">
                    <input type="text" size="60" id="intro-text" />
                    <label>Introductory Text</label>
                </div>
                <div class="mui-textfield">
                    <input type="text" size="60" id="title-text" />
                    <label>Title Text</label>
                </div>
              <?php $startcount = 4;?>
            </div>
            <div id="products" class="forms">
                <div class="product-count">Number of Products: <span id="number-of-products"><?php echo $startcount?></span></div>
                <ul class="mui-tabs__bar">
                    <?php
                        $count = 1;
                        while($count <= 12) {
                            if ($count === 1) {
                                $class = 'mui--is-active';
                            } else {
                                $class = 'none';
                            }
                            if ($count > $startcount) {
                                $style = 'display:none';
                            } else {
                                $style = '';
                            }
                        ?>
                    <li class="show-box box-<?php echo $count?> <?php echo $class?>" style="<?php echo $style?>"><a data-mui-toggle="tab" data-mui-controls="pane-default-<?php echo $count?>">Item-<?php echo $count?></a></li>

                    <?php
                        $count++;
                        }
                        ?>

                </ul>

                <?php
                    $count = 1;

                    $second_count = 0;

                    while($count <= 20) {

                        if ($count === 1) {
                            $class = 'mui-tabs__pane mui--is-active';
                        } else {
                            $class = 'mui-tabs__pane';
                        }
                    ?>

                <div class="<?php echo $class?>" id="pane-default-<?php echo $count?>">

                        <div class="content-<?php echo $count?> mui-panel" style="clear:both;">

                            <h2>Product <?php echo $count?></h2>

                            <div class="mui-panel">
                                <div class="mui-textfield" style="width:30%; float:left; padding-right:20px;">
                                    <input type="text" size="60" id="product-sku-<?php echo $count?>" />
                                    <label>Product SKU</label>
                                </div>
                                <div style="float:left;">
                                    <button class="mui-btn mui-btn--primary get-sku" data-id="<?php echo $count?>">Find Product</button>
                                    <button class="mui-btn mui-btn--primary clear-it" data-id="content-<?php echo $count?>" >Clear All</button>
                                </div>
                            </div>

                            <div class="mui-textfield">
                                <input type="text" id="product-title-<?php echo $count?>" class="title" size="60" />
                                <label>Product Title</label>
                            </div>
                            <div class="mui-textfield">
                                <input type="text" size="60" id="product-synopsis-<?php echo $count?>" class="product-synopsis" />
                                <label>Product Synopsis</label>
                            </div>
                            <div class="mui-textfield">
                                <input type="text" size="60" id="image-url-<?php echo $count?>" class="image" />
                                <label>Image URL</label>
                            </div>
                            <div class="mui-textfield">
                                <input type="text" size="60" id="product-url-<?php echo $count?>" class="link" />
                                <label>Product URL</label>
                            </div>

                            <?php while($second_count <= 0) {
                            // loop though until count is equal or less than 2 - ADDS 3 PRICE/FORMAT blocks
                            // Plus one to the counter each loop
                            $second_count++;
                                ?>
                                <div class="priceBlock">
                                    <div class="mui-textfield price">
                                        <input type="text" id="product-price-<?php echo $count?>-<?php echo $second_count?>" size="4" />
                                        <label>Price</label>
                                    </div>
                                    <div class="mui-select format">
                                        <select id="format-<?php echo $count?>-<?php echo $second_count?>">
                                            <option value="">Blank</option>
                                            <option value="DVD">DVD</option>
                                            <option value="Blu-ray">Blu-ray</option>
                                            <option value="3D-Blu-ray">3D Blu-ray</option>
                                            <option value="SteelBook">SteelBook</option>
                                            <option value="Exclusive-SteelBook">Exclusive SteelBook</option>
                                            <option value="CD">CD</option>
                                            <option value="Deluxe-CD">Deluxe CD</option>
                                            <option value="Vinyl">Vinyl</option>
                                            <option value="Xbox-One">Xbox One</option>
                                            <option value="PS4">PS4</option>
                                            <option value="Console-Bundle">Console Bundle</option>
                                            <option value="Poster">Poster</option>
                                            <option value="T-shirt">T-shirt</option>
                                            <option value="Digital-Album">Digital Album</option>
                                            <option value="Digital-Single">Digital Single</option>
                                        </select>
                                    </div>
                                </div>

                                <?php }
                            // Reset the counter to 1 or it will never loop again after the first 2.
                            $second_count = 0; ?>

                        </div>

                        <div style="clear:both;"></div>

                    </div>

                <?php $count++; }?>

                <button class="mui-btn mui-btn--primary add-another">Add More</button>
                <button class="mui-btn mui-btn--primary remove">Remove</button>

            </div>

        </div>
        <div class="output-wrapper">
            <div id="mainHTML"></div>
            <div id="siteHTML" class="hide"></div>
            <textarea id="quine"></textarea>
        </div>

        <script src="src/custom-email.js"></script>
        <script src="src/change-store.js"></script>
        <script src="src/save-html.js"></script>
        <script src="src/load.js"></script>
        <script src="src/add-more.js"></script>
        <script src="src/tabs.js"></script>
        <script src="src/clear-forms.js"></script>
        <script src="src/get-product.js"></script>

    </body>
</html>
