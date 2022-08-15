<template>
  <div class="part part-one">
    <h2>寄送地址</h2>
    <div class="form-row title-name  mt-4">
      <div class="select-wrapper d-flex flex-column">
        <label>稱謂</label>
        <select class="title" name="a-type" id="a-type" required>
          <option class="select-title" value="" disabled selected>稱謂</option>
          <option value="male">先生</option>
          <option value="femail">小姐</option>
        </select>
      </div>
      <div class="name-wrapper d-flex flex-column">
        <label for="">姓名</label>
        <input class="name" id="name" type="text" placeholder="請輸入姓名" />
      </div>
    </div>
    <div class="form-row telephone-email">
      <div class="telephone d-flex flex-column mt-4">
        <label for="">電話</label>
        <input id="phone" type="text" placeholder="請輸入行動電話" />
      </div>
      <div class="email d-flex flex-column mt-4">
        <label for="">Email</label>
        <input id="email" type="text" placeholder="請輸入電子郵件" />
      </div>
    </div>
    <div class="form-row city-address">
      <div class="city-wrapper d-flex flex-column mt-4">
        <label for="">縣市</label>
        <input id="city" type="text" placeholder="請輸入縣市" />
      </div>
      <div class="address d-flex flex-column mt-4">
        <label for="">地址</label>
        <input id="address" type="text" placeholder="請輸入地址" />
      </div>
    </div>
  </div>
</template>