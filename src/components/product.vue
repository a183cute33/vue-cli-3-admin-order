<template>
    <div id="main">
        <div class="container">
            <div class="info">
                <div class="left">
                    <label for="" class="checkbox">
                        <input type="checkbox">
                        <span><i class="fas fa-check"></i></span>
                    </label>
                </div>
                <div class="right">
                    <a id="add" @click="add">ADD NEW PRODUCT<i class="fas fa-plus"></i></a>
                </div>
            </div>
            <table class="table-list">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th width='100'>Original</th>
                        <th width='100'>Discount</th>
                        <th width='70'>Size</th>
                        <th width='80'>Color</th>
                        <th width='100'>Inventory</th>
                        <th width='150'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="product">
                            <label for="" class="checkbox">
                                <input type="checkbox">
                                <span><i class="fas fa-check"></i></span>
                            </label>
                            <div class="pic">
                                <img :src="require(`@/assets/logo.png`)" alt="">
                            </div>
                            <span>Mauris non tem.</span>
                        </td>
                        <td><span>$3,200</span></td>
                        <td><span>$2,800</span></td>
                        <td colspan="3" class="colspan-size-color-inventory">
                            <div class="item">
                                <div class="size"><span>L</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                             <div class="item">
                                 <div class="size"><span>M</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                             <div class="item">
                                 <div class="size"><span>S</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                        </td>
                        <td class="status">
                            <div class='select'>
                                <span class="b-yellow">SHIPPING
                                    <i class="fas fa-caret-down"></i>
                                </span>
                                <div class="list">
                                    <span>Paid</span>
                                    <span>Unpaid</span>
                                    <span>Shipping</span>
                                    <span>Done</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td class="product">
                            <label for="" class="checkbox">
                                <input type="checkbox">
                                <span><i class="fas fa-check"></i></span>
                            </label>
                            <div class="pic">
                                <img :src="require(`@/assets/logo.png`)" alt="">
                            </div>
                            <span>Mauris non tem.</span>
                        </td>
                        <td><span>$3,200</span></td>
                        <td><span>$2,800</span></td>
                        <td colspan="3" class="colspan-size-color-inventory">
                            <div class="item">
                                <div class="size"><span>L</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                             <div class="item">
                                 <div class="size"><span>M</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                             <div class="item">
                                 <div class="size"><span>S</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                        </td>
                        <td class="status">
                            <div class='select'>
                                <span class="b-yellow">SHIPPING
                                    <i class="fas fa-caret-down"></i>
                                </span>
                                <div class="list">
                                    <span>Paid</span>
                                    <span>Unpaid</span>
                                    <span>Shipping</span>
                                    <span>Done</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td class="product">
                            <label for="" class="checkbox">
                                <input type="checkbox">
                                <span><i class="fas fa-check"></i></span>
                            </label>
                            <div class="pic">
                                <img :src="require(`@/assets/logo.png`)" alt="">
                            </div>
                            <span>Mauris non tem.</span>
                        </td>
                        <td><span>$3,200</span></td>
                        <td><span>$2,800</span></td>
                        <td colspan="3" class="colspan-size-color-inventory">
                            <div class="item">
                                <div class="size"><span>L</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                             <div class="item">
                                 <div class="size"><span>M</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                             <div class="item">
                                 <div class="size"><span>S</span></div>
                                <div class="color">
                                    <span>Gray</span>
                                    <span>Black</span>
                                </div>
                                <div class="inventory">
                                    <span>15</span>
                                    <span>20</span>
                                </div>
                            </div>
                        </td>
                        <td class="status">
                            <div class='select'>
                                <span class="b-yellow">SHIPPING
                                    <i class="fas fa-caret-down"></i>
                                </span>
                                <div class="list">
                                    <span>Paid</span>
                                    <span>Unpaid</span>
                                    <span>Shipping</span>
                                    <span>Done</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <div id="box">
        <div class="content">
            <div class="title">
                ADD NEW PRODUCT
                <i class="fas fa-times" @click="close"></i>
            </div>
            <div class="main">
                <div class="left">
                    <div class="fas fa-upload upload">
                        <b>Drag an image or click here to upload…</b>
                        <div class="imgs">
                            <div class="_ic"><img :src="require(`@/assets/logo.png`)"></div>
                            <div class="_ic"><img :src="require(`@/assets/logo.png`)"></div>
                            <div class="_ic"><img :src="require(`@/assets/logo.png`)"></div>
                            <div class="_ic"><img :src="require(`@/assets/logo.png`)"></div>
                            <div class="_ic"><img :src="require(`@/assets/logo.png`)"></div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <b>Product Discription</b>
                    <input value="Vestibulum nec">
                    <textarea name="" id="" cols="30" rows="10">Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. </textarea>
                    <b>Price</b>
                    <div class="n2">
                        <div class="set">
                            <span>Original</span>
                            <input value="$3,200">
                        </div>
                        <div class="set">
                            <span>Discounts</span>
                            <input value="$2,800">
                        </div>
                    </div>
                    <b>Specification</b>
                    <div class="n3">
                         <div class="set">
                            <span>Size</span>
                            <select>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                            </select>
                        </div>
                        <div class="set">
                            <span>Gray</span>
                            <input value="Gray">
                        </div>
                          <div class="set">
                            <span>Inventory</span>
                            <input value="$15">
                        </div>
                    </div>
                    <a class="add">ADD NEW SPECIFICATION<i class="fas fa-plus"></i></a>
                </div>
                <div class="bottom">
                    <button>PUBLISH</button>
                    <a href="">SAVE DRAFT</a>
                </div>
            </div>
        </div>
        <div class="cover"></div>
    </div>

    </div>
</template>
<script>
$(function() {
  var $box = $("#box");
  $box.find(".add").click(function() {
    var $tmp = $(this)
      .prev()
      .clone();
    $tmp.find("input").val("");
    $tmp
      .find("select option")
      .first()
      .prop("selected");
    $tmp.insertBefore($(this));
  });
});
export default {
  name: "Product",
  methods: {
    add() {
      var $box = $("#box");
      $box.addClass("show");
    },
    close() {
      var $box = $("#box");
      $box.removeClass("show");
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/product";
@import "../assets/css/box";
</style>
