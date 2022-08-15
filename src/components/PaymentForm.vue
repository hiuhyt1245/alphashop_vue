<template>
  <div class="part part-three">
    <h2>付款資訊</h2>
    <div class="form-row d-flex flex-column mt-4">
      <label for="" class="mb-2">持卡人姓名</label>
      <input id="card-name" type="text" placeholder="請輸入持卡人姓名" />
    </div>
    <div class="form-row d-flex flex-column">
      <label for="" class="mb-2 mt-4">卡號</label>
      <input id="card" type="text" placeholder="1111 2222 3333 4444" />
    </div>
    <div class="form-row d-flex flex-row justify-content-between">
      <div class="validity-container d-flex flex-column">
        <label for="" class="mb-2 mt-4">有效期限</label>
        <input id="validity" type="text" placeholder="MM/YY" />
      </div>
      <div class="cvc-container d-flex flex-column align-items-end">
        <label for="" class="mb-2 mt-4">CVC/CCV</label>
        <input id="cvc" type="text" placeholder="123" />
      </div>
    </div>
  </div>
</template>