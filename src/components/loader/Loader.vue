<template>
  <div class="loader">
    <div class="loader__img">
      <img src="../../assets/5845cd430b2a3b54fdbaecf8.png" alt="pepe" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style>
.loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loader__img {
  margin: auto;
  animation: rotate 2s ease-in-out infinite;
  height: 100px;
  width: 100px;
}
.loader__img img {
  height: 100%;
  width: auto;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
